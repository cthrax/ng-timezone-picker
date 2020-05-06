import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import timezones from './timezones.json';
import moment from 'moment-timezone';
import * as i0 from "@angular/core";
function getMiddle(first, last) {
    return Math.floor((last + first) / 2);
}
let TimezoneMapPickerService = class TimezoneMapPickerService {
    constructor() {
        this.hovered = null;
        this._selected = null;
        // Copy it out so no one mucks with the original list
        this.timezones = timezones.map((t) => Object.assign({}, t));
        // Sort the list for each of searching
        this.timezones.sort((left, right) => {
            if (left.timezone < right.timezone) {
                return -1;
            }
            else if (left.timezone > right.timezone) {
                return 1;
            }
            else {
                return 0;
            }
        });
    }
    get selected() {
        return this._selected;
    }
    set selected(timezone) {
        this.setTimezoneSelected(timezone);
    }
    getFullTimezoneList() {
        return this.timezones;
    }
    getTimeZoneObject(value, attribute) {
        return this.findTimezone(attribute ? attribute : 'timezone', value);
    }
    getSystemTimezone() {
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
        this._selected = null;
    }
    setTimezoneSelected(timezone) {
        this.unselectCurrent();
        if (!!timezone) {
            timezone.selected = true;
        }
        this._selected = timezone;
    }
    setTimezoneByKey(zonename) {
        if (!zonename) {
            return;
        }
        this.unselectCurrent();
        const timezone = this.findTimezone('timezone', zonename);
        timezone.selected = true;
        this._selected = timezone;
    }
    findTimezone(key, value) {
        let first = 0;
        let last = this.timezones.length - 1;
        let middle = getMiddle(first, last);
        while (first <= last) {
            if (value < this.timezones[middle][key]) {
                last = middle - 1;
                middle = getMiddle(first, last);
            }
            else if (value > this.timezones[middle][key]) {
                first = middle + 1;
                middle = getMiddle(first, last);
            }
            else {
                return this.timezones[middle];
            }
        }
        return null;
    }
};
TimezoneMapPickerService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TimezoneMapPickerService_Factory() { return new TimezoneMapPickerService(); }, token: TimezoneMapPickerService, providedIn: "root" });
TimezoneMapPickerService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], TimezoneMapPickerService);
export { TimezoneMapPickerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXpvbmUtbWFwLXBpY2tlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGN0aHJheC90aW1lem9uZS1tYXAtcGlja2VyLyIsInNvdXJjZXMiOlsibGliL3RpbWV6b25lLW1hcC1waWNrZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLFNBQVMsTUFBTSxrQkFBa0IsQ0FBQztBQUN6QyxPQUFPLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQzs7QUFHckMsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUk7SUFDNUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLENBQUM7QUFLRCxJQUFhLHdCQUF3QixHQUFyQyxNQUFhLHdCQUF3QjtJQUVuQztRQWVPLFlBQU8sR0FBYSxJQUFJLENBQUM7UUFDeEIsY0FBUyxHQUFHLElBQUksQ0FBQztRQWZ2QixxREFBcUQ7UUFDckQsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVELHNDQUFzQztRQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNsQyxJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRTtnQkFDbEMsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUNYO2lCQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFO2dCQUN6QyxPQUFPLENBQUMsQ0FBQzthQUNWO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxDQUFDO2FB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O1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLHdCQUF3QixDQXlGcEM7U0F6Rlksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHRpbWV6b25lcyBmcm9tICcuL3RpbWV6b25lcy5qc29uJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50LXRpbWV6b25lJztcbmltcG9ydCB7VGltZXpvbmV9IGZyb20gJy4vdHlwZXMnO1xuXG5mdW5jdGlvbiBnZXRNaWRkbGUoZmlyc3QsIGxhc3QpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoKGxhc3QgKyBmaXJzdCkgLyAyKTtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVGltZXpvbmVNYXBQaWNrZXJTZXJ2aWNlIHtcbiAgcHVibGljIHRpbWV6b25lczogQXJyYXk8VGltZXpvbmU+O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBDb3B5IGl0IG91dCBzbyBubyBvbmUgbXVja3Mgd2l0aCB0aGUgb3JpZ2luYWwgbGlzdFxuICAgIHRoaXMudGltZXpvbmVzID0gdGltZXpvbmVzLm1hcCgodCkgPT4gT2JqZWN0LmFzc2lnbih7fSwgdCkpO1xuICAgIC8vIFNvcnQgdGhlIGxpc3QgZm9yIGVhY2ggb2Ygc2VhcmNoaW5nXG4gICAgdGhpcy50aW1lem9uZXMuc29ydCgobGVmdCwgcmlnaHQpID0+IHtcbiAgICAgIGlmIChsZWZ0LnRpbWV6b25lIDwgcmlnaHQudGltZXpvbmUpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfSBlbHNlIGlmIChsZWZ0LnRpbWV6b25lID4gcmlnaHQudGltZXpvbmUpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBob3ZlcmVkOiBUaW1lem9uZSA9IG51bGw7XG4gIHByaXZhdGUgX3NlbGVjdGVkID0gbnVsbDtcblxuICBwdWJsaWMgZ2V0IHNlbGVjdGVkKCk6IFRpbWV6b25lIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IHNlbGVjdGVkKHRpbWV6b25lKSB7XG4gICAgdGhpcy5zZXRUaW1lem9uZVNlbGVjdGVkKHRpbWV6b25lKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGdWxsVGltZXpvbmVMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLnRpbWV6b25lcztcbiAgfVxuXG4gIGdldFRpbWVab25lT2JqZWN0KHZhbHVlLCBhdHRyaWJ1dGU/KTogVGltZXpvbmUge1xuICAgIHJldHVybiB0aGlzLmZpbmRUaW1lem9uZShhdHRyaWJ1dGUgPyBhdHRyaWJ1dGUgOiAndGltZXpvbmUnLCB2YWx1ZSk7XG4gIH1cblxuICBnZXRTeXN0ZW1UaW1lem9uZSgpOiBUaW1lem9uZSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGltZVpvbmVPYmplY3QobW9tZW50LnR6Lmd1ZXNzKCkpO1xuICB9XG5cbiAgdW5zZWxlY3RDdXJyZW50KCkge1xuICAgIHRoaXMudGltZXpvbmVzLnNvbWUoKHRpbWV6b25lKSA9PiB7XG4gICAgICBpZiAodGltZXpvbmUuc2VsZWN0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgdGltZXpvbmUuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgdGhpcy5fc2VsZWN0ZWQgPSBudWxsO1xuICB9XG5cbiAgc2V0VGltZXpvbmVTZWxlY3RlZCh0aW1lem9uZTogVGltZXpvbmUpIHtcbiAgICB0aGlzLnVuc2VsZWN0Q3VycmVudCgpO1xuICAgIGlmICghIXRpbWV6b25lKSB7XG4gICAgICB0aW1lem9uZS5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdGVkID0gdGltZXpvbmU7XG4gIH1cblxuICBzZXRUaW1lem9uZUJ5S2V5KHpvbmVuYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIXpvbmVuYW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudW5zZWxlY3RDdXJyZW50KCk7XG5cbiAgICBjb25zdCB0aW1lem9uZSA9IHRoaXMuZmluZFRpbWV6b25lKCd0aW1lem9uZScsIHpvbmVuYW1lKTtcbiAgICB0aW1lem9uZS5zZWxlY3RlZCA9IHRydWU7XG4gICAgdGhpcy5fc2VsZWN0ZWQgPSB0aW1lem9uZTtcbiAgfVxuXG4gIGZpbmRUaW1lem9uZShrZXksIHZhbHVlKTogVGltZXpvbmUge1xuICAgIGxldCBmaXJzdCA9IDA7XG4gICAgbGV0IGxhc3QgPSB0aGlzLnRpbWV6b25lcy5sZW5ndGggLSAxO1xuICAgIGxldCBtaWRkbGUgPSBnZXRNaWRkbGUoZmlyc3QsIGxhc3QpO1xuXG4gICAgd2hpbGUgKGZpcnN0IDw9IGxhc3QpIHtcbiAgICAgIGlmICh2YWx1ZSA8IHRoaXMudGltZXpvbmVzW21pZGRsZV1ba2V5XSkge1xuICAgICAgICBsYXN0ID0gbWlkZGxlIC0gMTtcbiAgICAgICAgbWlkZGxlID0gZ2V0TWlkZGxlKGZpcnN0LCBsYXN0KTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPiB0aGlzLnRpbWV6b25lc1ttaWRkbGVdW2tleV0pIHtcbiAgICAgICAgZmlyc3QgPSBtaWRkbGUgKyAxO1xuICAgICAgICBtaWRkbGUgPSBnZXRNaWRkbGUoZmlyc3QsIGxhc3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZXpvbmVzW21pZGRsZV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiJdfQ==