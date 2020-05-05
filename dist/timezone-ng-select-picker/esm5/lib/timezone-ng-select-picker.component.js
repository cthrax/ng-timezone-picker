/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TimezoneMapPickerService } from '@cthrax/timezone-map-picker';
var TimezoneNgSelectPickerComponent = /** @class */ (function () {
    function TimezoneNgSelectPickerComponent(timezoneService) {
        this.timezoneService = timezoneService;
        this.showDropDown = true;
        this.showHover = true;
        this.onTimeSelectionChange = new EventEmitter();
        this.groupBy = (/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            var _a = tslib_1.__read(item.timezone.split("/"), 2), country = _a[0], timezone = _a[1];
            return country;
        });
        this.timezones = timezoneService.getFullTimezoneList();
    }
    /**
     * @return {?}
     */
    TimezoneNgSelectPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!!this.defaultTimeZone && this.defaultTimeZone !== '') {
            this.timezoneService.setTimezoneByKey(this.defaultTimeZone);
        }
    };
    /**
     * @param {?} timezone
     * @return {?}
     */
    TimezoneNgSelectPickerComponent.prototype.timezoneSelectionChange = /**
     * @param {?} timezone
     * @return {?}
     */
    function (timezone) {
        this.onTimeSelectionChange.emit(timezone);
    };
    TimezoneNgSelectPickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cth-timezone-ng-select-picker',
                    template: "<div>\n  <ng-select\n    *ngIf=\"showDropDown\"\n    [ngClass]=\"selectClass\"\n    [items]=\"timezones\"\n    [clearable]=\"true\"\n    [searchable]=\"true\"\n    bindLabel=\"timezone\"\n    (ngModelChange)=\"timezoneSelectionChange($event)\"\n    [(ngModel)]=\"timezoneService.selected\">\n    ></ng-select>\n  <cth-timezone-map-picker [ngClass]=\"mapClass\" [defaultTimezone]=\"defaultTimeZone\"></cth-timezone-map-picker>\n  <div *ngIf=\"showHover\" [ngClass]=\"hoverClass\">\n    <span>{{timezoneService?.hovered?.timezone}}&nbsp;({{timezoneService?.hovered?.zonename}})</span>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    TimezoneNgSelectPickerComponent.ctorParameters = function () { return [
        { type: TimezoneMapPickerService }
    ]; };
    TimezoneNgSelectPickerComponent.propDecorators = {
        defaultTimeZone: [{ type: Input }],
        showDropDown: [{ type: Input }],
        showHover: [{ type: Input }],
        hoverClass: [{ type: Input }],
        selectClass: [{ type: Input }],
        mapClass: [{ type: Input }],
        onTimeSelectionChange: [{ type: Output }]
    };
    return TimezoneNgSelectPickerComponent;
}());
export { TimezoneNgSelectPickerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXpvbmUtbmctc2VsZWN0LXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3RocmF4L3RpbWV6b25lLW5nLXNlbGVjdC1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvdGltZXpvbmUtbmctc2VsZWN0LXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBVyx3QkFBd0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBRS9FO0lBa0JFLHlDQUNTLGVBQXlDO1FBQXpDLG9CQUFlLEdBQWYsZUFBZSxDQUEwQjtRQVZsQyxpQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixjQUFTLEdBQVksSUFBSSxDQUFDO1FBTWhDLDBCQUFxQixHQUEyQixJQUFJLFlBQVksRUFBWSxDQUFDO1FBY2hGLFlBQU87Ozs7UUFBRyxVQUFDLElBQWE7WUFDdkIsSUFBQSxnREFBOEMsRUFBN0MsZUFBTyxFQUFFLGdCQUFvQztZQUNwRCxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDLEVBQUM7UUFaQSxJQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ3pELENBQUM7Ozs7SUFFRCxrREFBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssRUFBRSxFQUFFO1lBQ3pELElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzdEO0lBQ0gsQ0FBQzs7Ozs7SUFPTSxpRUFBdUI7Ozs7SUFBOUIsVUFBK0IsUUFBa0I7UUFDL0MsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QyxDQUFDOztnQkFyQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwrQkFBK0I7b0JBQ3pDLHNtQkFBeUQ7aUJBRTFEOzs7O2dCQU5pQix3QkFBd0I7OztrQ0FVdkMsS0FBSzsrQkFDTCxLQUFLOzRCQUNMLEtBQUs7NkJBRUwsS0FBSzs4QkFDTCxLQUFLOzJCQUNMLEtBQUs7d0NBRUwsTUFBTTs7SUF1QlQsc0NBQUM7Q0FBQSxBQXZDRCxJQXVDQztTQWxDWSwrQkFBK0I7OztJQUUxQyxvREFBa0M7O0lBQ2xDLDBEQUF3Qzs7SUFDeEMsdURBQTZDOztJQUM3QyxvREFBMEM7O0lBRTFDLHFEQUFtQzs7SUFDbkMsc0RBQW9DOztJQUNwQyxtREFBaUM7O0lBRWpDLGdFQUF1Rjs7SUFjdkYsa0RBR0U7O0lBZEEsMERBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGltZXpvbmUsIFRpbWV6b25lTWFwUGlja2VyU2VydmljZX0gZnJvbSAnQGN0aHJheC90aW1lem9uZS1tYXAtcGlja2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3RoLXRpbWV6b25lLW5nLXNlbGVjdC1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vdGltZXpvbmUtbmctc2VsZWN0LXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgVGltZXpvbmVOZ1NlbGVjdFBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIHRpbWV6b25lczogQXJyYXk8VGltZXpvbmU+O1xuICBASW5wdXQoKSBwdWJsaWMgZGVmYXVsdFRpbWVab25lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBzaG93RHJvcERvd246IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBwdWJsaWMgc2hvd0hvdmVyOiBib29sZWFuID0gdHJ1ZTtcblxuICBASW5wdXQoKSBwdWJsaWMgaG92ZXJDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgc2VsZWN0Q2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgcHVibGljIG1hcENsYXNzOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIG9uVGltZVNlbGVjdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPFRpbWV6b25lPiA9IG5ldyBFdmVudEVtaXR0ZXI8VGltZXpvbmU+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHRpbWV6b25lU2VydmljZTogVGltZXpvbmVNYXBQaWNrZXJTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMudGltZXpvbmVzID0gdGltZXpvbmVTZXJ2aWNlLmdldEZ1bGxUaW1lem9uZUxpc3QoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghIXRoaXMuZGVmYXVsdFRpbWVab25lICYmIHRoaXMuZGVmYXVsdFRpbWVab25lICE9PSAnJykge1xuICAgICAgdGhpcy50aW1lem9uZVNlcnZpY2Uuc2V0VGltZXpvbmVCeUtleSh0aGlzLmRlZmF1bHRUaW1lWm9uZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdyb3VwQnkgPSAoaXRlbTpUaW1lem9uZSkgPT4ge1xuICAgIGNvbnN0IFtjb3VudHJ5LCB0aW1lem9uZV0gPSBpdGVtLnRpbWV6b25lLnNwbGl0KFwiL1wiKVxuICAgIHJldHVybiBjb3VudHJ5O1xuICB9O1xuXG4gIHB1YmxpYyB0aW1lem9uZVNlbGVjdGlvbkNoYW5nZSh0aW1lem9uZTogVGltZXpvbmUpIHtcbiAgICB0aGlzLm9uVGltZVNlbGVjdGlvbkNoYW5nZS5lbWl0KHRpbWV6b25lKTtcbiAgfVxuXG59XG4iXX0=