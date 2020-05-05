#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var mapshaper = require("mapshaper");
var build_1 = require("@etclabscore/dl-github-releases/build");
var path = require("path");
var fs = require("fs");
var moment = require("moment-timezone");
var d3 = require("d3-geo");
var TIMEZONE_VERSION = '2020a';
var GEO_JSON_PATH = path.join(__dirname, './geojson/');
var DOWNLOAD_JSON = path.join(GEO_JSON_PATH, TIMEZONE_VERSION, 'dist', 'combined.json');
function downloadGeoJson() {
    return __awaiter(this, void 0, void 0, function () {
        var findGeoJson;
        return __generator(this, function (_a) {
            findGeoJson = function (asset) {
                if (!!asset) {
                    if (asset.name === "timezones.geojson.zip" && asset.browser_download_url.indexOf(TIMEZONE_VERSION) >= 0) {
                        console.log("Downloading " + asset.name + "...");
                        return true;
                    }
                }
                return false;
            };
            return [2 /*return*/, build_1["default"]('evansiroky', 'timezone-boundary-builder', GEO_JSON_PATH, undefined, findGeoJson, true)];
        });
    });
}
function featureToPath(geometry, fullFeatures) {
    var projection = d3.geoEquirectangular()
        .fitExtent([[0, 0], [100, 50]], fullFeatures)
        .precision(.3);
    //.precision(10)
    //.translate([100, 100])
    //.scale(100, 100);
    return d3.geoPath(projection)(geometry);
}
function shapeGeoJson() {
    return __awaiter(this, void 0, void 0, function () {
        var alignmentDate, outfile, cmd, output, geoJson, timezoneList, countryLookup;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    alignmentDate = moment.utc().month(2).day(1);
                    outfile = 'cli-simple.json';
                    cmd = "-i " + DOWNLOAD_JSON + " -simplify .001 rdp -o " + outfile + " precision=0.1";
                    return [4 /*yield*/, mapshaper.applyCommands(cmd)];
                case 1:
                    output = _a.sent();
                    geoJson = JSON.parse(output[outfile].toString('utf-8'));
                    timezoneList = [];
                    countryLookup = {};
                    moment.tz.countries().forEach(function (countryCode) {
                        moment.tz.zonesForCountry(countryCode, { offset: true }).forEach(function (zone) {
                            countryLookup[zone.name] = {
                                "countryCode": countryCode,
                                "offset": zone.offset
                            };
                        });
                    });
                    geoJson['features'].forEach(function (country) {
                        var tzid = country['properties']['tzid'];
                        var zone = moment.tz.zone(tzid);
                        /*
                           "timezone": "Europe/Vilnius",
                        "country": "LT",
                        "pin": "285,49",
                        "offset": 2,
                        "points": "279,47,285,47,287,48,286,49,286,50,283,50,282,49,281,49,280,48,279,47",
                        "zonename": "EET"
                         */
                        if (!!zone && !!countryLookup[tzid]) {
                            var path_1 = featureToPath(country['geometry'], geoJson);
                            timezoneList.push({
                                timezone: tzid,
                                country: countryLookup[tzid].countryCode,
                                offset: Math.trunc(countryLookup[tzid].offset / 60),
                                zonename: zone.abbr(alignmentDate),
                                points: path_1
                            });
                        }
                        else {
                            console.log("No timezone or countryLookup for " + tzid);
                        }
                    });
                    fs.writeFileSync(path.join(GEO_JSON_PATH, '../../../src/lib', 'timezones.json'), JSON.stringify(timezoneList), { encoding: 'utf-8' });
                    return [2 /*return*/];
            }
        });
    });
}
function fileExists(filename) {
    try {
        if (fs.existsSync(filename)) {
            return true;
        }
    }
    catch (err) {
        return false;
    }
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!fileExists(DOWNLOAD_JSON)) return [3 /*break*/, 2];
                    return [4 /*yield*/, downloadGeoJson()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    shapeGeoJson();
                    return [2 /*return*/];
            }
        });
    });
}
main();
