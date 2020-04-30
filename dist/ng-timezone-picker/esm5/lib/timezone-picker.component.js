import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import moment from 'moment-timezone';
import { TimezonePickerService } from './timezone-picker.service';
var TimezonePickerComponent = /** @class */ (function () {
    function TimezonePickerComponent(timezoneService) {
        this.timezoneService = timezoneService;
        this.defaultTimezone = null;
        this.width = 500;
        this.height = 250;
        this.dayLightSaving = (typeof moment == "function");
        this.hoverTextChanged = new EventEmitter();
        this.mapSelectionChanged = new EventEmitter();
        this.timezones = this.timezoneService.getFullTimezoneList();
        this.addMomentProperties();
    }
    Object.defineProperty(TimezonePickerComponent.prototype, "dimensions", {
        get: function () {
            return {
                height: this.height,
                width: this.width
            };
        },
        enumerable: true,
        configurable: true
    });
    TimezonePickerComponent.prototype.ngOnInit = function () {
        if (!this.defaultTimezone) {
            var systemTimezone = this.timezoneService.getSystemTimezone();
            if (!!systemTimezone) {
                this.defaultTimezone = systemTimezone.zonename;
            }
        }
        this.timezoneService.setTimezoneByKey(this.defaultTimezone);
    };
    TimezonePickerComponent.prototype.addMomentProperties = function () {
        this.timezones.forEach(function (zoneObj) {
            if (moment) {
                var momentObj = moment().tz(zoneObj.timezone);
                zoneObj.zonename = momentObj.zoneName();
                zoneObj.timezone = momentObj._z.name;
            }
        });
    };
    TimezonePickerComponent.ctorParameters = function () { return [
        { type: TimezonePickerService }
    ]; };
    tslib_1.__decorate([
        Input()
    ], TimezonePickerComponent.prototype, "defaultTimezone", void 0);
    tslib_1.__decorate([
        Input()
    ], TimezonePickerComponent.prototype, "width", void 0);
    tslib_1.__decorate([
        Input()
    ], TimezonePickerComponent.prototype, "height", void 0);
    tslib_1.__decorate([
        Input()
    ], TimezonePickerComponent.prototype, "dayLightSaving", void 0);
    tslib_1.__decorate([
        Output()
    ], TimezonePickerComponent.prototype, "hoverTextChanged", void 0);
    tslib_1.__decorate([
        Output()
    ], TimezonePickerComponent.prototype, "mapSelectionChanged", void 0);
    TimezonePickerComponent = tslib_1.__decorate([
        Component({
            selector: 'cth-timezone-picker',
            template: "<div [ngStyle]=\"dimensions\">\n  <cth-world-svg [width]=\"width\" [height]=\"height\"></cth-world-svg>\n</div>\n"
        })
    ], TimezonePickerComponent);
    return TimezonePickerComponent;
}());
export { TimezonePickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXpvbmUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXRpbWV6b25lLXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi90aW1lem9uZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpGLE9BQU8sTUFBTSxNQUFNLGlCQUFpQixDQUFDO0FBQ3JDLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBT2hFO0lBa0JFLGlDQUFvQixlQUFzQztRQUF0QyxvQkFBZSxHQUFmLGVBQWUsQ0FBdUI7UUFmMUMsb0JBQWUsR0FBVyxJQUFJLENBQUM7UUFDL0IsVUFBSyxHQUFHLEdBQUcsQ0FBQztRQUNaLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFDYixtQkFBYyxHQUFZLENBQUMsT0FBTyxNQUFNLElBQUksVUFBVSxDQUFDLENBQUM7UUFFdkQscUJBQWdCLEdBQTJCLElBQUksWUFBWSxFQUFZLENBQUM7UUFDeEUsd0JBQW1CLEdBQTJCLElBQUksWUFBWSxFQUFZLENBQUM7UUFVMUYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDNUQsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQVZELHNCQUFXLCtDQUFVO2FBQXJCO1lBQ0UsT0FBTztnQkFDTCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSzthQUNsQixDQUFDO1FBQ0osQ0FBQzs7O09BQUE7SUFPRCwwQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDekIsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBRWhFLElBQUksQ0FBQyxDQUFDLGNBQWMsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUMsUUFBUSxDQUFDO2FBQ2hEO1NBQ0Y7UUFFRCxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQscURBQW1CLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPO1lBRTdCLElBQUksTUFBTSxFQUFFO2dCQUNWLElBQU0sU0FBUyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2hELE9BQU8sQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN4QyxPQUFPLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFBO2FBQ3JDO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDOztnQkExQm9DLHFCQUFxQjs7SUFmakQ7UUFBUixLQUFLLEVBQUU7b0VBQXVDO0lBQ3RDO1FBQVIsS0FBSyxFQUFFOzBEQUFvQjtJQUNuQjtRQUFSLEtBQUssRUFBRTsyREFBcUI7SUFDcEI7UUFBUixLQUFLLEVBQUU7bUVBQWdFO0lBRTlEO1FBQVQsTUFBTSxFQUFFO3FFQUFnRjtJQUMvRTtRQUFULE1BQU0sRUFBRTt3RUFBbUY7SUFUakYsdUJBQXVCO1FBTG5DLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsNkhBQStDO1NBRWhELENBQUM7T0FDVyx1QkFBdUIsQ0E2Q25DO0lBQUQsOEJBQUM7Q0FBQSxBQTdDRCxJQTZDQztTQTdDWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtmaW5kVmFsdWUsIGdlbmVyYXRlRWxlbWVudCwgVGltZXpvbmV9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQtdGltZXpvbmUnO1xuaW1wb3J0IHtUaW1lem9uZVBpY2tlclNlcnZpY2V9IGZyb20gJy4vdGltZXpvbmUtcGlja2VyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjdGgtdGltZXpvbmUtcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWV6b25lLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgVGltZXpvbmVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgdGltZXpvbmVzO1xuXG4gIEBJbnB1dCgpIHB1YmxpYyBkZWZhdWx0VGltZXpvbmU6IHN0cmluZyA9IG51bGw7XG4gIEBJbnB1dCgpIHB1YmxpYyB3aWR0aCA9IDUwMDtcbiAgQElucHV0KCkgcHVibGljIGhlaWdodCA9IDI1MDtcbiAgQElucHV0KCkgcHVibGljIGRheUxpZ2h0U2F2aW5nOiBib29sZWFuID0gKHR5cGVvZiBtb21lbnQgPT0gXCJmdW5jdGlvblwiKTtcblxuICBAT3V0cHV0KCkgcHVibGljIGhvdmVyVGV4dENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxUaW1lem9uZT4gPSBuZXcgRXZlbnRFbWl0dGVyPFRpbWV6b25lPigpO1xuICBAT3V0cHV0KCkgcHVibGljIG1hcFNlbGVjdGlvbkNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxUaW1lem9uZT4gPSBuZXcgRXZlbnRFbWl0dGVyPFRpbWV6b25lPigpO1xuXG4gIHB1YmxpYyBnZXQgZGltZW5zaW9ucygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGltZXpvbmVTZXJ2aWNlOiBUaW1lem9uZVBpY2tlclNlcnZpY2UpIHtcbiAgICB0aGlzLnRpbWV6b25lcyA9IHRoaXMudGltZXpvbmVTZXJ2aWNlLmdldEZ1bGxUaW1lem9uZUxpc3QoKTtcbiAgICB0aGlzLmFkZE1vbWVudFByb3BlcnRpZXMoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5kZWZhdWx0VGltZXpvbmUpIHtcbiAgICAgIGNvbnN0IHN5c3RlbVRpbWV6b25lID0gdGhpcy50aW1lem9uZVNlcnZpY2UuZ2V0U3lzdGVtVGltZXpvbmUoKTtcblxuICAgICAgaWYgKCEhc3lzdGVtVGltZXpvbmUpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0VGltZXpvbmUgPSBzeXN0ZW1UaW1lem9uZS56b25lbmFtZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnRpbWV6b25lU2VydmljZS5zZXRUaW1lem9uZUJ5S2V5KHRoaXMuZGVmYXVsdFRpbWV6b25lKTtcbiAgfVxuXG4gIGFkZE1vbWVudFByb3BlcnRpZXMoKSB7XG4gICAgdGhpcy50aW1lem9uZXMuZm9yRWFjaCgoem9uZU9iaikgPT4ge1xuXG4gICAgICBpZiAobW9tZW50KSB7XG4gICAgICAgIGNvbnN0IG1vbWVudE9iaiA9IG1vbWVudCgpLnR6KHpvbmVPYmoudGltZXpvbmUpO1xuICAgICAgICB6b25lT2JqLnpvbmVuYW1lID0gbW9tZW50T2JqLnpvbmVOYW1lKCk7XG4gICAgICAgIHpvbmVPYmoudGltZXpvbmUgPSBtb21lbnRPYmouX3oubmFtZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==