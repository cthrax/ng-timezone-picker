/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TimezoneMapPickerService } from 'timezone-map-picker';
export class TimezoneNgSelectPickerComponent {
    /**
     * @param {?} timezoneService
     */
    constructor(timezoneService) {
        this.timezoneService = timezoneService;
        this.showDropDown = true;
        this.showHover = true;
        this.onTimeSelectionChange = new EventEmitter();
        this.groupBy = (/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            const [country, timezone] = item.timezone.split("/");
            return country;
        });
        this.timezones = timezoneService.getFullTimezoneList();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!!this.defaultTimeZone && this.defaultTimeZone !== '') {
            this.timezoneService.setTimezoneByKey(this.defaultTimeZone);
        }
    }
    /**
     * @param {?} timezone
     * @return {?}
     */
    timezoneSelectionChange(timezone) {
        this.onTimeSelectionChange.emit(timezone);
    }
}
TimezoneNgSelectPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'cth-timezone-ng-select-picker',
                template: "<div>\n  <ng-select\n    *ngIf=\"showDropDown\"\n    [ngClass]=\"selectClass\"\n    [items]=\"timezones\"\n    [clearable]=\"true\"\n    [searchable]=\"true\"\n    bindLabel=\"timezone\"\n    (ngModelChange)=\"timezoneSelectionChange($event)\"\n    [(ngModel)]=\"timezoneService.selected\">\n    ></ng-select>\n  <cth-timezone-map-picker [ngClass]=\"mapClass\" [defaultTimezone]=\"defaultTimeZone\"></cth-timezone-map-picker>\n  <div *ngIf=\"showHover\" [ngClass]=\"hoverClass\">\n    <span>{{timezoneService?.hovered?.timezone}}&nbsp;({{timezoneService?.hovered?.zonename}})</span>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
TimezoneNgSelectPickerComponent.ctorParameters = () => [
    { type: TimezoneMapPickerService }
];
TimezoneNgSelectPickerComponent.propDecorators = {
    defaultTimeZone: [{ type: Input }],
    showDropDown: [{ type: Input }],
    showHover: [{ type: Input }],
    hoverClass: [{ type: Input }],
    selectClass: [{ type: Input }],
    mapClass: [{ type: Input }],
    onTimeSelectionChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    TimezoneNgSelectPickerComponent.prototype.timezones;
    /** @type {?} */
    TimezoneNgSelectPickerComponent.prototype.defaultTimeZone;
    /** @type {?} */
    TimezoneNgSelectPickerComponent.prototype.showDropDown;
    /** @type {?} */
    TimezoneNgSelectPickerComponent.prototype.showHover;
    /** @type {?} */
    TimezoneNgSelectPickerComponent.prototype.hoverClass;
    /** @type {?} */
    TimezoneNgSelectPickerComponent.prototype.selectClass;
    /** @type {?} */
    TimezoneNgSelectPickerComponent.prototype.mapClass;
    /** @type {?} */
    TimezoneNgSelectPickerComponent.prototype.onTimeSelectionChange;
    /** @type {?} */
    TimezoneNgSelectPickerComponent.prototype.groupBy;
    /** @type {?} */
    TimezoneNgSelectPickerComponent.prototype.timezoneService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXpvbmUtbmctc2VsZWN0LXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3RocmF4L3RpbWV6b25lLXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi90aW1lem9uZS1uZy1zZWxlY3QtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQVcsd0JBQXdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQU92RSxNQUFNLE9BQU8sK0JBQStCOzs7O0lBYTFDLFlBQ1MsZUFBeUM7UUFBekMsb0JBQWUsR0FBZixlQUFlLENBQTBCO1FBVmxDLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFNaEMsMEJBQXFCLEdBQTJCLElBQUksWUFBWSxFQUFZLENBQUM7UUFjaEYsWUFBTzs7OztRQUFHLENBQUMsSUFBYSxFQUFFLEVBQUU7a0JBQzNCLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUNwRCxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDLEVBQUM7UUFaQSxJQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ3pELENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxLQUFLLEVBQUUsRUFBRTtZQUN6RCxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUM3RDtJQUNILENBQUM7Ozs7O0lBT00sdUJBQXVCLENBQUMsUUFBa0I7UUFDL0MsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7WUFyQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLHNtQkFBeUQ7YUFFMUQ7Ozs7WUFOaUIsd0JBQXdCOzs7OEJBVXZDLEtBQUs7MkJBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUVMLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLO29DQUVMLE1BQU07Ozs7SUFUUCxvREFBa0M7O0lBQ2xDLDBEQUF3Qzs7SUFDeEMsdURBQTZDOztJQUM3QyxvREFBMEM7O0lBRTFDLHFEQUFtQzs7SUFDbkMsc0RBQW9DOztJQUNwQyxtREFBaUM7O0lBRWpDLGdFQUF1Rjs7SUFjdkYsa0RBR0U7O0lBZEEsMERBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGltZXpvbmUsIFRpbWV6b25lTWFwUGlja2VyU2VydmljZX0gZnJvbSAndGltZXpvbmUtbWFwLXBpY2tlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N0aC10aW1lem9uZS1uZy1zZWxlY3QtcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWV6b25lLW5nLXNlbGVjdC1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFRpbWV6b25lTmdTZWxlY3RQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyB0aW1lem9uZXM6IEFycmF5PFRpbWV6b25lPjtcbiAgQElucHV0KCkgcHVibGljIGRlZmF1bHRUaW1lWm9uZTogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgc2hvd0Ryb3BEb3duOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgcHVibGljIHNob3dIb3ZlcjogYm9vbGVhbiA9IHRydWU7XG5cbiAgQElucHV0KCkgcHVibGljIGhvdmVyQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgcHVibGljIHNlbGVjdENsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBtYXBDbGFzczogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBvblRpbWVTZWxlY3Rpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxUaW1lem9uZT4gPSBuZXcgRXZlbnRFbWl0dGVyPFRpbWV6b25lPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyB0aW1lem9uZVNlcnZpY2U6IFRpbWV6b25lTWFwUGlja2VyU2VydmljZVxuICApIHtcbiAgICB0aGlzLnRpbWV6b25lcyA9IHRpbWV6b25lU2VydmljZS5nZXRGdWxsVGltZXpvbmVMaXN0KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoISF0aGlzLmRlZmF1bHRUaW1lWm9uZSAmJiB0aGlzLmRlZmF1bHRUaW1lWm9uZSAhPT0gJycpIHtcbiAgICAgIHRoaXMudGltZXpvbmVTZXJ2aWNlLnNldFRpbWV6b25lQnlLZXkodGhpcy5kZWZhdWx0VGltZVpvbmUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBncm91cEJ5ID0gKGl0ZW06VGltZXpvbmUpID0+IHtcbiAgICBjb25zdCBbY291bnRyeSwgdGltZXpvbmVdID0gaXRlbS50aW1lem9uZS5zcGxpdChcIi9cIilcbiAgICByZXR1cm4gY291bnRyeTtcbiAgfTtcblxuICBwdWJsaWMgdGltZXpvbmVTZWxlY3Rpb25DaGFuZ2UodGltZXpvbmU6IFRpbWV6b25lKSB7XG4gICAgdGhpcy5vblRpbWVTZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aW1lem9uZSk7XG4gIH1cblxufVxuIl19