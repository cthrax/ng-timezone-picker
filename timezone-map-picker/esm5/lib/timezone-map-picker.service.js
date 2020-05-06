import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import timezones from './timezones.json';
import moment from 'moment-timezone';
import * as i0 from "@angular/core";
function getMiddle(first, last) {
    return Math.floor((last + first) / 2);
}
var TimezoneMapPickerService = /** @class */ (function () {
    function TimezoneMapPickerService() {
        this.hovered = null;
        this._selected = null;
        // Copy it out so no one mucks with the original list
        this.timezones = timezones.map(function (t) { return Object.assign({}, t); });
        // Sort the list for each of searching
        this.timezones.sort(function (left, right) {
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
    Object.defineProperty(TimezoneMapPickerService.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (timezone) {
            this.setTimezoneSelected(timezone);
        },
        enumerable: true,
        configurable: true
    });
    TimezoneMapPickerService.prototype.getFullTimezoneList = function () {
        return this.timezones;
    };
    TimezoneMapPickerService.prototype.getTimeZoneObject = function (value, attribute) {
        return this.findTimezone(attribute ? attribute : 'timezone', value);
    };
    TimezoneMapPickerService.prototype.getSystemTimezone = function () {
        return this.getTimeZoneObject(moment.tz.guess());
    };
    TimezoneMapPickerService.prototype.unselectCurrent = function () {
        this.timezones.some(function (timezone) {
            if (timezone.selected === true) {
                timezone.selected = false;
                return true;
            }
            return false;
        });
        this._selected = null;
    };
    TimezoneMapPickerService.prototype.setTimezoneSelected = function (timezone) {
        this.unselectCurrent();
        if (!!timezone) {
            timezone.selected = true;
        }
        this._selected = timezone;
    };
    TimezoneMapPickerService.prototype.setTimezoneByKey = function (zonename) {
        if (!zonename) {
            return;
        }
        this.unselectCurrent();
        var timezone = this.findTimezone('timezone', zonename);
        timezone.selected = true;
        this._selected = timezone;
    };
    TimezoneMapPickerService.prototype.findTimezone = function (key, value) {
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
    TimezoneMapPickerService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TimezoneMapPickerService_Factory() { return new TimezoneMapPickerService(); }, token: TimezoneMapPickerService, providedIn: "root" });
    TimezoneMapPickerService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        })
    ], TimezoneMapPickerService);
    return TimezoneMapPickerService;
}());
export { TimezoneMapPickerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXpvbmUtbWFwLXBpY2tlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGN0aHJheC90aW1lem9uZS1tYXAtcGlja2VyLyIsInNvdXJjZXMiOlsibGliL3RpbWV6b25lLW1hcC1waWNrZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLFNBQVMsTUFBTSxrQkFBa0IsQ0FBQztBQUN6QyxPQUFPLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQzs7QUFHckMsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUk7SUFDNUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLENBQUM7QUFLRDtJQUVFO1FBZU8sWUFBTyxHQUFhLElBQUksQ0FBQztRQUN4QixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBZnZCLHFEQUFxRDtRQUNyRCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO1FBQzVELHNDQUFzQztRQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUksRUFBRSxLQUFLO1lBQzlCLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFO2dCQUNsQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ1g7aUJBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUU7Z0JBQ3pDLE9BQU8sQ0FBQyxDQUFDO2FBQ1Y7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLENBQUM7YUFDVjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUtELHNCQUFXLDhDQUFRO2FBQW5CO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7YUFFRCxVQUFvQixRQUFRO1lBQzFCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQyxDQUFDOzs7T0FKQTtJQU1NLHNEQUFtQixHQUExQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsb0RBQWlCLEdBQWpCLFVBQWtCLEtBQUssRUFBRSxTQUFVO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxvREFBaUIsR0FBakI7UUFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELGtEQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQVE7WUFDM0IsSUFBSSxRQUFRLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtnQkFDOUIsUUFBUSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQzFCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVELHNEQUFtQixHQUFuQixVQUFvQixRQUFrQjtRQUNwQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQ2QsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDMUI7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUM1QixDQUFDO0lBRUQsbURBQWdCLEdBQWhCLFVBQWlCLFFBQWdCO1FBQy9CLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFdkIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDekQsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDNUIsQ0FBQztJQUVELCtDQUFZLEdBQVosVUFBYSxHQUFHLEVBQUUsS0FBSztRQUNyQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDckMsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVwQyxPQUFPLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDcEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDdkMsSUFBSSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ2xCLE1BQU0sR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ2pDO2lCQUFNLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzlDLEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixNQUFNLEdBQUcsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNqQztpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDL0I7U0FDRjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7SUF4RlUsd0JBQXdCO1FBSHBDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyx3QkFBd0IsQ0F5RnBDO21DQXRHRDtDQXNHQyxBQXpGRCxJQXlGQztTQXpGWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgdGltZXpvbmVzIGZyb20gJy4vdGltZXpvbmVzLmpzb24nO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQtdGltZXpvbmUnO1xuaW1wb3J0IHtUaW1lem9uZX0gZnJvbSAnLi90eXBlcyc7XG5cbmZ1bmN0aW9uIGdldE1pZGRsZShmaXJzdCwgbGFzdCkge1xuICByZXR1cm4gTWF0aC5mbG9vcigobGFzdCArIGZpcnN0KSAvIDIpO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUaW1lem9uZU1hcFBpY2tlclNlcnZpY2Uge1xuICBwdWJsaWMgdGltZXpvbmVzOiBBcnJheTxUaW1lem9uZT47XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIENvcHkgaXQgb3V0IHNvIG5vIG9uZSBtdWNrcyB3aXRoIHRoZSBvcmlnaW5hbCBsaXN0XG4gICAgdGhpcy50aW1lem9uZXMgPSB0aW1lem9uZXMubWFwKCh0KSA9PiBPYmplY3QuYXNzaWduKHt9LCB0KSk7XG4gICAgLy8gU29ydCB0aGUgbGlzdCBmb3IgZWFjaCBvZiBzZWFyY2hpbmdcbiAgICB0aGlzLnRpbWV6b25lcy5zb3J0KChsZWZ0LCByaWdodCkgPT4ge1xuICAgICAgaWYgKGxlZnQudGltZXpvbmUgPCByaWdodC50aW1lem9uZSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9IGVsc2UgaWYgKGxlZnQudGltZXpvbmUgPiByaWdodC50aW1lem9uZSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGhvdmVyZWQ6IFRpbWV6b25lID0gbnVsbDtcbiAgcHJpdmF0ZSBfc2VsZWN0ZWQgPSBudWxsO1xuXG4gIHB1YmxpYyBnZXQgc2VsZWN0ZWQoKTogVGltZXpvbmUge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgc2VsZWN0ZWQodGltZXpvbmUpIHtcbiAgICB0aGlzLnNldFRpbWV6b25lU2VsZWN0ZWQodGltZXpvbmUpO1xuICB9XG5cbiAgcHVibGljIGdldEZ1bGxUaW1lem9uZUxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMudGltZXpvbmVzO1xuICB9XG5cbiAgZ2V0VGltZVpvbmVPYmplY3QodmFsdWUsIGF0dHJpYnV0ZT8pOiBUaW1lem9uZSB7XG4gICAgcmV0dXJuIHRoaXMuZmluZFRpbWV6b25lKGF0dHJpYnV0ZSA/IGF0dHJpYnV0ZSA6ICd0aW1lem9uZScsIHZhbHVlKTtcbiAgfVxuXG4gIGdldFN5c3RlbVRpbWV6b25lKCk6IFRpbWV6b25lIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUaW1lWm9uZU9iamVjdChtb21lbnQudHouZ3Vlc3MoKSk7XG4gIH1cblxuICB1bnNlbGVjdEN1cnJlbnQoKSB7XG4gICAgdGhpcy50aW1lem9uZXMuc29tZSgodGltZXpvbmUpID0+IHtcbiAgICAgIGlmICh0aW1lem9uZS5zZWxlY3RlZCA9PT0gdHJ1ZSkge1xuICAgICAgICB0aW1lem9uZS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICB0aGlzLl9zZWxlY3RlZCA9IG51bGw7XG4gIH1cblxuICBzZXRUaW1lem9uZVNlbGVjdGVkKHRpbWV6b25lOiBUaW1lem9uZSkge1xuICAgIHRoaXMudW5zZWxlY3RDdXJyZW50KCk7XG4gICAgaWYgKCEhdGltZXpvbmUpIHtcbiAgICAgIHRpbWV6b25lLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5fc2VsZWN0ZWQgPSB0aW1lem9uZTtcbiAgfVxuXG4gIHNldFRpbWV6b25lQnlLZXkoem9uZW5hbWU6IHN0cmluZykge1xuICAgIGlmICghem9uZW5hbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy51bnNlbGVjdEN1cnJlbnQoKTtcblxuICAgIGNvbnN0IHRpbWV6b25lID0gdGhpcy5maW5kVGltZXpvbmUoJ3RpbWV6b25lJywgem9uZW5hbWUpO1xuICAgIHRpbWV6b25lLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB0aGlzLl9zZWxlY3RlZCA9IHRpbWV6b25lO1xuICB9XG5cbiAgZmluZFRpbWV6b25lKGtleSwgdmFsdWUpOiBUaW1lem9uZSB7XG4gICAgbGV0IGZpcnN0ID0gMDtcbiAgICBsZXQgbGFzdCA9IHRoaXMudGltZXpvbmVzLmxlbmd0aCAtIDE7XG4gICAgbGV0IG1pZGRsZSA9IGdldE1pZGRsZShmaXJzdCwgbGFzdCk7XG5cbiAgICB3aGlsZSAoZmlyc3QgPD0gbGFzdCkge1xuICAgICAgaWYgKHZhbHVlIDwgdGhpcy50aW1lem9uZXNbbWlkZGxlXVtrZXldKSB7XG4gICAgICAgIGxhc3QgPSBtaWRkbGUgLSAxO1xuICAgICAgICBtaWRkbGUgPSBnZXRNaWRkbGUoZmlyc3QsIGxhc3QpO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA+IHRoaXMudGltZXpvbmVzW21pZGRsZV1ba2V5XSkge1xuICAgICAgICBmaXJzdCA9IG1pZGRsZSArIDE7XG4gICAgICAgIG1pZGRsZSA9IGdldE1pZGRsZShmaXJzdCwgbGFzdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy50aW1lem9uZXNbbWlkZGxlXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIl19