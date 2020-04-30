import {Injectable} from '@angular/core';

import timezones from './timezones.json';
import {Timezone} from './utils';
import moment from 'moment-timezone';

function getMiddle(first, last) {
  return Math.floor((last + first) / 2);
}

@Injectable({
  providedIn: 'root'
})
export class TimezonePickerService {
  public timezones: Array<Timezone>;
  constructor() {
    // Copy it out so no one mucks with the original list
    this.timezones = timezones.map((t) => Object.assign({}, t));
    // Sort the list for each of searching
    this.timezones.sort((left, right) => {
      if (left.timezone < right.timezone) {
        return 1;
      } else if (left.timezone > right.timezone) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  public getFullTimezoneList() {
    return this.timezones;
  }

  getTimeZoneObject(value, attribute?): Timezone {
    return this.findTimezone(attribute ? attribute : 'timezone', value);
  }

  getSystemTimezone(): Timezone {
    return this.getTimeZoneObject(moment.tz.guess());
  }

  unselectCurrent() {
    this.timezones.some((timezone) => {
      if (timezone.selected === true) {
        timezone.selected = false;
        return true;
      }
      return false;
    });
  }

  setTimezoneByKey(zonename: string) {
    if (!zonename) {
      return;
    }
    const timezone = this.findTimezone('timezone', zonename);
    timezone.selected = true;
    this.unselectCurrent();
  }

  findTimezone(key, value): Timezone {
    let first = 0;
    let last = this.timezones.length - 1;
    let middle = getMiddle(first, last);

    while (first <= last) {
      if (value < this.timezones[middle][key]) {
        last = middle - 1;
        middle = getMiddle(first, last);
      } else if (value > this.timezones[middle][key]) {
        first = middle + 1;
        middle = getMiddle(first, last);
      } else {
        return this.timezones[middle];
      }
    }

    return null;
  }
}
