import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import timezones from './timezones.json';
import moment from 'moment-timezone';
import * as i0 from "@angular/core";
function getMiddle(first, last) {
    return Math.floor((last + first) / 2);
}
var TimezonePickerService = /** @class */ (function () {
    function TimezonePickerService() {
        // Copy it out so no one mucks with the original list
        this.timezones = timezones.map(function (t) { return Object.assign({}, t); });
        // Sort the list for each of searching
        this.timezones.sort(function (left, right) {
            if (left.timezone < right.timezone) {
                return 1;
            }
            else if (left.timezone > right.timezone) {
                return -1;
            }
            else {
                return 0;
            }
        });
    }
    TimezonePickerService.prototype.getFullTimezoneList = function () {
        return this.timezones;
    };
    TimezonePickerService.prototype.getTimeZoneObject = function (value, attribute) {
        return this.findTimezone(attribute ? attribute : 'timezone', value);
    };
    TimezonePickerService.prototype.getSystemTimezone = function () {
        return this.getTimeZoneObject(moment.tz.guess());
    };
    TimezonePickerService.prototype.unselectCurrent = function () {
        this.timezones.some(function (timezone) {
            if (timezone.selected === true) {
                timezone.selected = false;
                return true;
            }
            return false;
        });
    };
    TimezonePickerService.prototype.setTimezoneByKey = function (zonename) {
        if (!zonename) {
            return;
        }
        var timezone = this.findTimezone('timezone', zonename);
        timezone.selected = true;
        this.unselectCurrent();
    };
    TimezonePickerService.prototype.findTimezone = function (key, value) {
        var first = 0;
        var last = this.timezones.length - 1;
        var middle = getMiddle(first, last);
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
    };
    TimezonePickerService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TimezonePickerService_Factory() { return new TimezonePickerService(); }, token: TimezonePickerService, providedIn: "root" });
    TimezonePickerService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        })
    ], TimezonePickerService);
    return TimezonePickerService;
}());
export { TimezonePickerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXpvbmUtcGlja2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy10aW1lem9uZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvdGltZXpvbmUtcGlja2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxTQUFTLE1BQU0sa0JBQWtCLENBQUM7QUFFekMsT0FBTyxNQUFNLE1BQU0saUJBQWlCLENBQUM7O0FBRXJDLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJO0lBQzVCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN4QyxDQUFDO0FBS0Q7SUFFRTtRQUNFLHFEQUFxRDtRQUNyRCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO1FBQzVELHNDQUFzQztRQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUksRUFBRSxLQUFLO1lBQzlCLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFO2dCQUNsQyxPQUFPLENBQUMsQ0FBQzthQUNWO2lCQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFO2dCQUN6QyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ1g7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLENBQUM7YUFDVjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLG1EQUFtQixHQUExQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsaURBQWlCLEdBQWpCLFVBQWtCLEtBQUssRUFBRSxTQUFVO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxpREFBaUIsR0FBakI7UUFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELCtDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQVE7WUFDM0IsSUFBSSxRQUFRLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtnQkFDOUIsUUFBUSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQzFCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGdEQUFnQixHQUFoQixVQUFpQixRQUFnQjtRQUMvQixJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsT0FBTztTQUNSO1FBQ0QsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDekQsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCw0Q0FBWSxHQUFaLFVBQWEsR0FBRyxFQUFFLEtBQUs7UUFDckIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFcEMsT0FBTyxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ3BCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3ZDLElBQUksR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQixNQUFNLEdBQUcsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNqQztpQkFBTSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM5QyxLQUFLLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDbkIsTUFBTSxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDakM7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQy9CO1NBQ0Y7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7O0lBbEVVLHFCQUFxQjtRQUhqQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1cscUJBQXFCLENBbUVqQztnQ0FoRkQ7Q0FnRkMsQUFuRUQsSUFtRUM7U0FuRVkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHRpbWV6b25lcyBmcm9tICcuL3RpbWV6b25lcy5qc29uJztcbmltcG9ydCB7VGltZXpvbmV9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQtdGltZXpvbmUnO1xuXG5mdW5jdGlvbiBnZXRNaWRkbGUoZmlyc3QsIGxhc3QpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoKGxhc3QgKyBmaXJzdCkgLyAyKTtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVGltZXpvbmVQaWNrZXJTZXJ2aWNlIHtcbiAgcHVibGljIHRpbWV6b25lczogQXJyYXk8VGltZXpvbmU+O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBDb3B5IGl0IG91dCBzbyBubyBvbmUgbXVja3Mgd2l0aCB0aGUgb3JpZ2luYWwgbGlzdFxuICAgIHRoaXMudGltZXpvbmVzID0gdGltZXpvbmVzLm1hcCgodCkgPT4gT2JqZWN0LmFzc2lnbih7fSwgdCkpO1xuICAgIC8vIFNvcnQgdGhlIGxpc3QgZm9yIGVhY2ggb2Ygc2VhcmNoaW5nXG4gICAgdGhpcy50aW1lem9uZXMuc29ydCgobGVmdCwgcmlnaHQpID0+IHtcbiAgICAgIGlmIChsZWZ0LnRpbWV6b25lIDwgcmlnaHQudGltZXpvbmUpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9IGVsc2UgaWYgKGxlZnQudGltZXpvbmUgPiByaWdodC50aW1lem9uZSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGdWxsVGltZXpvbmVMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLnRpbWV6b25lcztcbiAgfVxuXG4gIGdldFRpbWVab25lT2JqZWN0KHZhbHVlLCBhdHRyaWJ1dGU/KTogVGltZXpvbmUge1xuICAgIHJldHVybiB0aGlzLmZpbmRUaW1lem9uZShhdHRyaWJ1dGUgPyBhdHRyaWJ1dGUgOiAndGltZXpvbmUnLCB2YWx1ZSk7XG4gIH1cblxuICBnZXRTeXN0ZW1UaW1lem9uZSgpOiBUaW1lem9uZSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGltZVpvbmVPYmplY3QobW9tZW50LnR6Lmd1ZXNzKCkpO1xuICB9XG5cbiAgdW5zZWxlY3RDdXJyZW50KCkge1xuICAgIHRoaXMudGltZXpvbmVzLnNvbWUoKHRpbWV6b25lKSA9PiB7XG4gICAgICBpZiAodGltZXpvbmUuc2VsZWN0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgdGltZXpvbmUuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBzZXRUaW1lem9uZUJ5S2V5KHpvbmVuYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIXpvbmVuYW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRpbWV6b25lID0gdGhpcy5maW5kVGltZXpvbmUoJ3RpbWV6b25lJywgem9uZW5hbWUpO1xuICAgIHRpbWV6b25lLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB0aGlzLnVuc2VsZWN0Q3VycmVudCgpO1xuICB9XG5cbiAgZmluZFRpbWV6b25lKGtleSwgdmFsdWUpOiBUaW1lem9uZSB7XG4gICAgbGV0IGZpcnN0ID0gMDtcbiAgICBsZXQgbGFzdCA9IHRoaXMudGltZXpvbmVzLmxlbmd0aCAtIDE7XG4gICAgbGV0IG1pZGRsZSA9IGdldE1pZGRsZShmaXJzdCwgbGFzdCk7XG5cbiAgICB3aGlsZSAoZmlyc3QgPD0gbGFzdCkge1xuICAgICAgaWYgKHZhbHVlIDwgdGhpcy50aW1lem9uZXNbbWlkZGxlXVtrZXldKSB7XG4gICAgICAgIGxhc3QgPSBtaWRkbGUgLSAxO1xuICAgICAgICBtaWRkbGUgPSBnZXRNaWRkbGUoZmlyc3QsIGxhc3QpO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA+IHRoaXMudGltZXpvbmVzW21pZGRsZV1ba2V5XSkge1xuICAgICAgICBmaXJzdCA9IG1pZGRsZSArIDE7XG4gICAgICAgIG1pZGRsZSA9IGdldE1pZGRsZShmaXJzdCwgbGFzdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy50aW1lem9uZXNbbWlkZGxlXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIl19