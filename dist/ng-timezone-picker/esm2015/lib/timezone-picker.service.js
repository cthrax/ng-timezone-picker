import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import timezones from './timezones.json';
import moment from 'moment-timezone';
import * as i0 from "@angular/core";
function getMiddle(first, last) {
    return Math.floor((last + first) / 2);
}
let TimezonePickerService = class TimezonePickerService {
    constructor() {
        // Copy it out so no one mucks with the original list
        this.timezones = timezones.map((t) => Object.assign({}, t));
        // Sort the list for each of searching
        this.timezones.sort((left, right) => {
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
    }
    setTimezoneByKey(zonename) {
        if (!zonename) {
            return;
        }
        const timezone = this.findTimezone('timezone', zonename);
        timezone.selected = true;
        this.unselectCurrent();
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
TimezonePickerService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TimezonePickerService_Factory() { return new TimezonePickerService(); }, token: TimezonePickerService, providedIn: "root" });
TimezonePickerService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], TimezonePickerService);
export { TimezonePickerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXpvbmUtcGlja2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy10aW1lem9uZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvdGltZXpvbmUtcGlja2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxTQUFTLE1BQU0sa0JBQWtCLENBQUM7QUFFekMsT0FBTyxNQUFNLE1BQU0saUJBQWlCLENBQUM7O0FBRXJDLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJO0lBQzVCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN4QyxDQUFDO0FBS0QsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7SUFFaEM7UUFDRSxxREFBcUQ7UUFDckQsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVELHNDQUFzQztRQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNsQyxJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRTtnQkFDbEMsT0FBTyxDQUFDLENBQUM7YUFDVjtpQkFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRTtnQkFDekMsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUNYO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxDQUFDO2FBQ1Y7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxtQkFBbUI7UUFDeEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsU0FBVTtRQUNqQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUMvQixJQUFJLFFBQVEsQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO2dCQUM5QixRQUFRLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDMUIsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsUUFBZ0I7UUFDL0IsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLE9BQU87U0FDUjtRQUNELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3pELFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsWUFBWSxDQUFDLEdBQUcsRUFBRSxLQUFLO1FBQ3JCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNyQyxJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXBDLE9BQU8sS0FBSyxJQUFJLElBQUksRUFBRTtZQUNwQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN2QyxJQUFJLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDbEIsTUFBTSxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDakM7aUJBQU0sSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDOUMsS0FBSyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ25CLE1BQU0sR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ2pDO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUMvQjtTQUNGO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0YsQ0FBQTs7QUFuRVkscUJBQXFCO0lBSGpDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxxQkFBcUIsQ0FtRWpDO1NBbkVZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB0aW1lem9uZXMgZnJvbSAnLi90aW1lem9uZXMuanNvbic7XG5pbXBvcnQge1RpbWV6b25lfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50LXRpbWV6b25lJztcblxuZnVuY3Rpb24gZ2V0TWlkZGxlKGZpcnN0LCBsYXN0KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKChsYXN0ICsgZmlyc3QpIC8gMik7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRpbWV6b25lUGlja2VyU2VydmljZSB7XG4gIHB1YmxpYyB0aW1lem9uZXM6IEFycmF5PFRpbWV6b25lPjtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gQ29weSBpdCBvdXQgc28gbm8gb25lIG11Y2tzIHdpdGggdGhlIG9yaWdpbmFsIGxpc3RcbiAgICB0aGlzLnRpbWV6b25lcyA9IHRpbWV6b25lcy5tYXAoKHQpID0+IE9iamVjdC5hc3NpZ24oe30sIHQpKTtcbiAgICAvLyBTb3J0IHRoZSBsaXN0IGZvciBlYWNoIG9mIHNlYXJjaGluZ1xuICAgIHRoaXMudGltZXpvbmVzLnNvcnQoKGxlZnQsIHJpZ2h0KSA9PiB7XG4gICAgICBpZiAobGVmdC50aW1lem9uZSA8IHJpZ2h0LnRpbWV6b25lKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfSBlbHNlIGlmIChsZWZ0LnRpbWV6b25lID4gcmlnaHQudGltZXpvbmUpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RnVsbFRpbWV6b25lTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy50aW1lem9uZXM7XG4gIH1cblxuICBnZXRUaW1lWm9uZU9iamVjdCh2YWx1ZSwgYXR0cmlidXRlPyk6IFRpbWV6b25lIHtcbiAgICByZXR1cm4gdGhpcy5maW5kVGltZXpvbmUoYXR0cmlidXRlID8gYXR0cmlidXRlIDogJ3RpbWV6b25lJywgdmFsdWUpO1xuICB9XG5cbiAgZ2V0U3lzdGVtVGltZXpvbmUoKTogVGltZXpvbmUge1xuICAgIHJldHVybiB0aGlzLmdldFRpbWVab25lT2JqZWN0KG1vbWVudC50ei5ndWVzcygpKTtcbiAgfVxuXG4gIHVuc2VsZWN0Q3VycmVudCgpIHtcbiAgICB0aGlzLnRpbWV6b25lcy5zb21lKCh0aW1lem9uZSkgPT4ge1xuICAgICAgaWYgKHRpbWV6b25lLnNlbGVjdGVkID09PSB0cnVlKSB7XG4gICAgICAgIHRpbWV6b25lLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0VGltZXpvbmVCeUtleSh6b25lbmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCF6b25lbmFtZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0aW1lem9uZSA9IHRoaXMuZmluZFRpbWV6b25lKCd0aW1lem9uZScsIHpvbmVuYW1lKTtcbiAgICB0aW1lem9uZS5zZWxlY3RlZCA9IHRydWU7XG4gICAgdGhpcy51bnNlbGVjdEN1cnJlbnQoKTtcbiAgfVxuXG4gIGZpbmRUaW1lem9uZShrZXksIHZhbHVlKTogVGltZXpvbmUge1xuICAgIGxldCBmaXJzdCA9IDA7XG4gICAgbGV0IGxhc3QgPSB0aGlzLnRpbWV6b25lcy5sZW5ndGggLSAxO1xuICAgIGxldCBtaWRkbGUgPSBnZXRNaWRkbGUoZmlyc3QsIGxhc3QpO1xuXG4gICAgd2hpbGUgKGZpcnN0IDw9IGxhc3QpIHtcbiAgICAgIGlmICh2YWx1ZSA8IHRoaXMudGltZXpvbmVzW21pZGRsZV1ba2V5XSkge1xuICAgICAgICBsYXN0ID0gbWlkZGxlIC0gMTtcbiAgICAgICAgbWlkZGxlID0gZ2V0TWlkZGxlKGZpcnN0LCBsYXN0KTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPiB0aGlzLnRpbWV6b25lc1ttaWRkbGVdW2tleV0pIHtcbiAgICAgICAgZmlyc3QgPSBtaWRkbGUgKyAxO1xuICAgICAgICBtaWRkbGUgPSBnZXRNaWRkbGUoZmlyc3QsIGxhc3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZXpvbmVzW21pZGRsZV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiJdfQ==