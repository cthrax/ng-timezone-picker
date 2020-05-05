import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TimezoneMapPickerService } from './timezone-map-picker.service';
let TimezoneMapPickerComponent = class TimezoneMapPickerComponent {
    constructor(timezoneService) {
        this.timezoneService = timezoneService;
        this.defaultTimezone = null;
        this.width = 100;
        this.height = 50;
        this.timezoneSelected = new EventEmitter();
        this.hoverChanged = new EventEmitter();
        this.timezones = this.timezoneService.getFullTimezoneList();
    }
    get dimensions() {
        return {
            height: this.height,
            width: this.width
        };
    }
    timezoneAreaSelected(timezone) {
        this.timezoneSelected.emit(timezone);
    }
    timezoneHoverChanged(timezone) {
        this.hoverChanged.emit(timezone);
    }
    ngOnInit() {
        if (!this.defaultTimezone) {
            const systemTimezone = this.timezoneService.getSystemTimezone();
            if (!!systemTimezone) {
                this.defaultTimezone = systemTimezone.timezone;
            }
        }
        this.timezoneService.setTimezoneByKey(this.defaultTimezone);
    }
};
TimezoneMapPickerComponent.ctorParameters = () => [
    { type: TimezoneMapPickerService }
];
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
export { TimezoneMapPickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXpvbmUtbWFwLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3RocmF4L3RpbWV6b25lLW1hcC1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvdGltZXpvbmUtbWFwLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFRdkUsSUFBYSwwQkFBMEIsR0FBdkMsTUFBYSwwQkFBMEI7SUFpQnJDLFlBQW9CLGVBQXlDO1FBQXpDLG9CQUFlLEdBQWYsZUFBZSxDQUEwQjtRQWQ3QyxvQkFBZSxHQUFXLElBQUksQ0FBQztRQUMvQixVQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ1osV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUVYLHFCQUFnQixHQUEyQixJQUFJLFlBQVksRUFBWSxDQUFDO1FBQ3hFLGlCQUFZLEdBQTJCLElBQUksWUFBWSxFQUFZLENBQUM7UUFVbkYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDOUQsQ0FBQztJQVRELElBQVcsVUFBVTtRQUNuQixPQUFPO1lBQ0wsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNsQixDQUFDO0lBQ0osQ0FBQztJQU1NLG9CQUFvQixDQUFDLFFBQWtCO1FBQzVDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVNLG9CQUFvQixDQUFDLFFBQWtCO1FBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDekIsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBRWhFLElBQUksQ0FBQyxDQUFDLGNBQWMsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUMsUUFBUSxDQUFDO2FBQ2hEO1NBQ0Y7UUFFRCxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM5RCxDQUFDO0NBQ0YsQ0FBQTs7WUF2QnNDLHdCQUF3Qjs7QUFkcEQ7SUFBUixLQUFLLEVBQUU7bUVBQXVDO0FBQ3RDO0lBQVIsS0FBSyxFQUFFO3lEQUFvQjtBQUNuQjtJQUFSLEtBQUssRUFBRTswREFBb0I7QUFFbEI7SUFBVCxNQUFNLEVBQUU7b0VBQWdGO0FBQy9FO0lBQVQsTUFBTSxFQUFFO2dFQUE0RTtBQVIxRSwwQkFBMEI7SUFMdEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHlCQUF5QjtRQUNuQyxnU0FBbUQ7S0FFcEQsQ0FBQztHQUNXLDBCQUEwQixDQXdDdEM7U0F4Q1ksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGltZXpvbmVNYXBQaWNrZXJTZXJ2aWNlfSBmcm9tICcuL3RpbWV6b25lLW1hcC1waWNrZXIuc2VydmljZSc7XG5pbXBvcnQge1RpbWV6b25lfSBmcm9tICcuL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3RoLXRpbWV6b25lLW1hcC1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vdGltZXpvbmUtbWFwLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgVGltZXpvbmVNYXBQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgdGltZXpvbmVzO1xuXG4gIEBJbnB1dCgpIHB1YmxpYyBkZWZhdWx0VGltZXpvbmU6IHN0cmluZyA9IG51bGw7XG4gIEBJbnB1dCgpIHB1YmxpYyB3aWR0aCA9IDEwMDtcbiAgQElucHV0KCkgcHVibGljIGhlaWdodCA9IDUwO1xuXG4gIEBPdXRwdXQoKSBwdWJsaWMgdGltZXpvbmVTZWxlY3RlZDogRXZlbnRFbWl0dGVyPFRpbWV6b25lPiA9IG5ldyBFdmVudEVtaXR0ZXI8VGltZXpvbmU+KCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgaG92ZXJDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8VGltZXpvbmU+ID0gbmV3IEV2ZW50RW1pdHRlcjxUaW1lem9uZT4oKTtcblxuICBwdWJsaWMgZ2V0IGRpbWVuc2lvbnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICB3aWR0aDogdGhpcy53aWR0aFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRpbWV6b25lU2VydmljZTogVGltZXpvbmVNYXBQaWNrZXJTZXJ2aWNlKSB7XG4gICAgdGhpcy50aW1lem9uZXMgPSB0aGlzLnRpbWV6b25lU2VydmljZS5nZXRGdWxsVGltZXpvbmVMaXN0KCk7XG4gIH1cblxuICBwdWJsaWMgdGltZXpvbmVBcmVhU2VsZWN0ZWQodGltZXpvbmU6IFRpbWV6b25lKSB7XG4gICAgdGhpcy50aW1lem9uZVNlbGVjdGVkLmVtaXQodGltZXpvbmUpO1xuICB9XG5cbiAgcHVibGljIHRpbWV6b25lSG92ZXJDaGFuZ2VkKHRpbWV6b25lOiBUaW1lem9uZSkge1xuICAgIHRoaXMuaG92ZXJDaGFuZ2VkLmVtaXQodGltZXpvbmUpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmRlZmF1bHRUaW1lem9uZSkge1xuICAgICAgY29uc3Qgc3lzdGVtVGltZXpvbmUgPSB0aGlzLnRpbWV6b25lU2VydmljZS5nZXRTeXN0ZW1UaW1lem9uZSgpO1xuXG4gICAgICBpZiAoISFzeXN0ZW1UaW1lem9uZSkge1xuICAgICAgICB0aGlzLmRlZmF1bHRUaW1lem9uZSA9IHN5c3RlbVRpbWV6b25lLnRpbWV6b25lO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudGltZXpvbmVTZXJ2aWNlLnNldFRpbWV6b25lQnlLZXkodGhpcy5kZWZhdWx0VGltZXpvbmUpO1xuICB9XG59XG4iXX0=