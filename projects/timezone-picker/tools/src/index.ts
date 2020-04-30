#!/usr/bin/env node
import * as mapshaper from "mapshaper";
import downloadReleases from '@etclabscore/dl-github-releases/build';
import * as path from 'path';
import * as fs from 'fs';
import * as moment from "moment-timezone";
import * as d3 from 'd3-geo';
import * as d3Geo from 'd3-geo-projection';

const TIMEZONE_VERSION = '2020a';
const GEO_JSON_PATH = path.join(__dirname, './geojson/');
const DOWNLOAD_JSON = path.join(GEO_JSON_PATH, TIMEZONE_VERSION, 'dist', 'combined.json');


async function downloadGeoJson() {
  const findGeoJson = function(asset?) {
    if (!!asset) {
      if (asset.name === "timezones.geojson.zip" && asset.browser_download_url.indexOf(TIMEZONE_VERSION) >= 0) {
        console.log(`Downloading ${asset.name}...`);
        return true;
      }
    }
    return false;
  };
  return downloadReleases('evansiroky', 'timezone-boundary-builder', GEO_JSON_PATH, undefined, findGeoJson, true);
}

function featureToPath(geometry, fullFeatures) {
  const projection = d3.geoEquirectangular()
    .fitExtent([[0, 0], [100, 50]], fullFeatures)
    .precision(.3)
    //.precision(10)
    //.translate([100, 100])
    //.scale(100, 100);
  return d3.geoPath(projection)(geometry);
}

async function shapeGeoJson() {
  const alignmentDate = moment.utc().month(2).day(1);
  const outfile = 'cli-simple.json'
  const cmd = `-i ${DOWNLOAD_JSON} -simplify .001 rdp -o ${outfile} precision=0.1`;
  const output = await mapshaper.applyCommands(cmd)
  const geoJson = JSON.parse(output[outfile].toString('utf-8'));
  const timezoneList = [];
  const countryLookup = {};
  moment.tz.countries().forEach((countryCode) => {
    moment.tz.zonesForCountry(countryCode, {offset: true}).forEach((zone) => {
      countryLookup[zone.name] = {
        "countryCode": countryCode,
        "offset": zone.offset
      };
    })
  })
  geoJson['features'].forEach((country) => {
    const tzid = country['properties']['tzid'];
    const zone = moment.tz.zone(tzid);
    /*
       "timezone": "Europe/Vilnius",
    "country": "LT",
    "pin": "285,49",
    "offset": 2,
    "points": "279,47,285,47,287,48,286,49,286,50,283,50,282,49,281,49,280,48,279,47",
    "zonename": "EET"
     */
    if (!!zone && !!countryLookup[tzid]) {
      const path = featureToPath(country['geometry'], geoJson);
      timezoneList.push({
        timezone: tzid,
        country: countryLookup[tzid].countryCode,
        offset: Math.trunc(countryLookup[tzid].offset / 60),
        zonename: zone.abbr(alignmentDate),
        points: path
      });
    } else {
      console.log(`No timezone or countryLookup for ${tzid}`);
    }
  });

  fs.writeFileSync(path.join(GEO_JSON_PATH, '../../../src/lib', 'timezones.json'), JSON.stringify(timezoneList), {encoding: 'utf-8'});
}

function fileExists(filename) {
  try {
    if (fs.existsSync(filename)) {
      return true;
    }
  } catch(err) {
    return false;
  }
}

async function main() {
  if (!fileExists(DOWNLOAD_JSON)) {
    await downloadGeoJson();
  }
  shapeGeoJson();
}

main();
