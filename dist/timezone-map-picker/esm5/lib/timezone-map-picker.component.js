import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TimezoneMapPickerService } from './timezone-map-picker.service';
var TimezoneMapPickerComponent = /** @class */ (function () {
    function TimezoneMapPickerComponent(timezoneService) {
        this.timezoneService = timezoneService;
        this.defaultTimezone = null;
        this.width = 100;
        this.height = 50;
        this.timezoneSelected = new EventEmitter();
        this.hoverChanged = new EventEmitter();
        this.timezones = this.timezoneService.getFullTimezoneList();
    }
    Object.defineProperty(TimezoneMapPickerComponent.prototype, "dimensions", {
        get: function () {
            return {
                height: this.height,
                width: this.width
            };
        },
        enumerable: true,
        configurable: true
    });
    TimezoneMapPickerComponent.prototype.timezoneAreaSelected = function (timezone) {
        this.timezoneSelected.emit(timezone);
    };
    TimezoneMapPickerComponent.prototype.timezoneHoverChanged = function (timezone) {
        this.hoverChanged.emit(timezone);
    };
    TimezoneMapPickerComponent.prototype.ngOnInit = function () {
        if (!this.defaultTimezone) {
            var systemTimezone = this.timezoneService.getSystemTimezone();
            if (!!systemTimezone) {
                this.defaultTimezone = systemTimezone.timezone;
            }
        }
        this.timezoneService.setTimezoneByKey(this.defaultTimezone);
    };
    TimezoneMapPickerComponent.ctorParameters = function () { return [
        { type: TimezoneMapPickerService }
    ]; };
    tslib_1.__decorate([
        Input()
    ], TimezoneMapPickerComponent.prototype, "defaultTimezone", void 0);
    tslib_1.__decorate([
        Input()
    ], TimezoneMapPickerComponent.prototype, "width", void 0);
    tslib_1.__decorate([
        Input()
    ], TimezoneMapPickerComponent.prototype, "height", void 0);
    tslib_1.__decorate([
        Output()
    ], TimezoneMapPickerComponent.prototype, "timezoneSelected", void 0);
    tslib_1.__decorate([
        Output()
    ], TimezoneMapPickerComponent.prototype, "hoverChanged", void 0);
    TimezoneMapPickerComponent = tslib_1.__decorate([
        Component({
            selector: 'cth-timezone-map-picker',
            template: "<div [ngStyle]=\"dimensions\">\n  <cth-world-svg\n    (hoverChanged)=\"timezoneHoverChanged($event)\"\n    (timezoneSelected)=\"timezoneAreaSelected($event)\"\n    [defaultTimezone]=\"defaultTimezone\"\n    [width]=\"width\"\n    [height]=\"height\"></cth-world-svg>\n</div>\n"
        })
    ], TimezoneMapPickerComponent);
    return TimezoneMapPickerComponent;
}());
export { TimezoneMapPickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXpvbmUtbWFwLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3RocmF4L3RpbWV6b25lLW1hcC1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvdGltZXpvbmUtbWFwLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFRdkU7SUFpQkUsb0NBQW9CLGVBQXlDO1FBQXpDLG9CQUFlLEdBQWYsZUFBZSxDQUEwQjtRQWQ3QyxvQkFBZSxHQUFXLElBQUksQ0FBQztRQUMvQixVQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ1osV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUVYLHFCQUFnQixHQUEyQixJQUFJLFlBQVksRUFBWSxDQUFDO1FBQ3hFLGlCQUFZLEdBQTJCLElBQUksWUFBWSxFQUFZLENBQUM7UUFVbkYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDOUQsQ0FBQztJQVRELHNCQUFXLGtEQUFVO2FBQXJCO1lBQ0UsT0FBTztnQkFDTCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSzthQUNsQixDQUFDO1FBQ0osQ0FBQzs7O09BQUE7SUFNTSx5REFBb0IsR0FBM0IsVUFBNEIsUUFBa0I7UUFDNUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0seURBQW9CLEdBQTNCLFVBQTRCLFFBQWtCO1FBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCw2Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDekIsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBRWhFLElBQUksQ0FBQyxDQUFDLGNBQWMsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUMsUUFBUSxDQUFDO2FBQ2hEO1NBQ0Y7UUFFRCxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM5RCxDQUFDOztnQkF0Qm9DLHdCQUF3Qjs7SUFkcEQ7UUFBUixLQUFLLEVBQUU7dUVBQXVDO0lBQ3RDO1FBQVIsS0FBSyxFQUFFOzZEQUFvQjtJQUNuQjtRQUFSLEtBQUssRUFBRTs4REFBb0I7SUFFbEI7UUFBVCxNQUFNLEVBQUU7d0VBQWdGO0lBQy9FO1FBQVQsTUFBTSxFQUFFO29FQUE0RTtJQVIxRSwwQkFBMEI7UUFMdEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHlCQUF5QjtZQUNuQyxnU0FBbUQ7U0FFcEQsQ0FBQztPQUNXLDBCQUEwQixDQXdDdEM7SUFBRCxpQ0FBQztDQUFBLEFBeENELElBd0NDO1NBeENZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RpbWV6b25lTWFwUGlja2VyU2VydmljZX0gZnJvbSAnLi90aW1lem9uZS1tYXAtcGlja2VyLnNlcnZpY2UnO1xuaW1wb3J0IHtUaW1lem9uZX0gZnJvbSAnLi90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N0aC10aW1lem9uZS1tYXAtcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWV6b25lLW1hcC1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFRpbWV6b25lTWFwUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIHRpbWV6b25lcztcblxuICBASW5wdXQoKSBwdWJsaWMgZGVmYXVsdFRpbWV6b25lOiBzdHJpbmcgPSBudWxsO1xuICBASW5wdXQoKSBwdWJsaWMgd2lkdGggPSAxMDA7XG4gIEBJbnB1dCgpIHB1YmxpYyBoZWlnaHQgPSA1MDtcblxuICBAT3V0cHV0KCkgcHVibGljIHRpbWV6b25lU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxUaW1lem9uZT4gPSBuZXcgRXZlbnRFbWl0dGVyPFRpbWV6b25lPigpO1xuICBAT3V0cHV0KCkgcHVibGljIGhvdmVyQ2hhbmdlZDogRXZlbnRFbWl0dGVyPFRpbWV6b25lPiA9IG5ldyBFdmVudEVtaXR0ZXI8VGltZXpvbmU+KCk7XG5cbiAgcHVibGljIGdldCBkaW1lbnNpb25zKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgd2lkdGg6IHRoaXMud2lkdGhcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0aW1lem9uZVNlcnZpY2U6IFRpbWV6b25lTWFwUGlja2VyU2VydmljZSkge1xuICAgIHRoaXMudGltZXpvbmVzID0gdGhpcy50aW1lem9uZVNlcnZpY2UuZ2V0RnVsbFRpbWV6b25lTGlzdCgpO1xuICB9XG5cbiAgcHVibGljIHRpbWV6b25lQXJlYVNlbGVjdGVkKHRpbWV6b25lOiBUaW1lem9uZSkge1xuICAgIHRoaXMudGltZXpvbmVTZWxlY3RlZC5lbWl0KHRpbWV6b25lKTtcbiAgfVxuXG4gIHB1YmxpYyB0aW1lem9uZUhvdmVyQ2hhbmdlZCh0aW1lem9uZTogVGltZXpvbmUpIHtcbiAgICB0aGlzLmhvdmVyQ2hhbmdlZC5lbWl0KHRpbWV6b25lKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5kZWZhdWx0VGltZXpvbmUpIHtcbiAgICAgIGNvbnN0IHN5c3RlbVRpbWV6b25lID0gdGhpcy50aW1lem9uZVNlcnZpY2UuZ2V0U3lzdGVtVGltZXpvbmUoKTtcblxuICAgICAgaWYgKCEhc3lzdGVtVGltZXpvbmUpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0VGltZXpvbmUgPSBzeXN0ZW1UaW1lem9uZS50aW1lem9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnRpbWV6b25lU2VydmljZS5zZXRUaW1lem9uZUJ5S2V5KHRoaXMuZGVmYXVsdFRpbWV6b25lKTtcbiAgfVxufVxuIl19