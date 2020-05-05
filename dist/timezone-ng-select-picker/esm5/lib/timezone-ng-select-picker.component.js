/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TimezoneMapPickerService } from 'timezone-map-picker';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXpvbmUtbmctc2VsZWN0LXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3RocmF4L3RpbWV6b25lLXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi90aW1lem9uZS1uZy1zZWxlY3QtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFXLHdCQUF3QixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFFdkU7SUFrQkUseUNBQ1MsZUFBeUM7UUFBekMsb0JBQWUsR0FBZixlQUFlLENBQTBCO1FBVmxDLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFNaEMsMEJBQXFCLEdBQTJCLElBQUksWUFBWSxFQUFZLENBQUM7UUFjaEYsWUFBTzs7OztRQUFHLFVBQUMsSUFBYTtZQUN2QixJQUFBLGdEQUE4QyxFQUE3QyxlQUFPLEVBQUUsZ0JBQW9DO1lBQ3BELE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUMsRUFBQztRQVpBLElBQUksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDekQsQ0FBQzs7OztJQUVELGtEQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxFQUFFLEVBQUU7WUFDekQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDN0Q7SUFDSCxDQUFDOzs7OztJQU9NLGlFQUF1Qjs7OztJQUE5QixVQUErQixRQUFrQjtRQUMvQyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7O2dCQXJDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtvQkFDekMsc21CQUF5RDtpQkFFMUQ7Ozs7Z0JBTmlCLHdCQUF3Qjs7O2tDQVV2QyxLQUFLOytCQUNMLEtBQUs7NEJBQ0wsS0FBSzs2QkFFTCxLQUFLOzhCQUNMLEtBQUs7MkJBQ0wsS0FBSzt3Q0FFTCxNQUFNOztJQXVCVCxzQ0FBQztDQUFBLEFBdkNELElBdUNDO1NBbENZLCtCQUErQjs7O0lBRTFDLG9EQUFrQzs7SUFDbEMsMERBQXdDOztJQUN4Qyx1REFBNkM7O0lBQzdDLG9EQUEwQzs7SUFFMUMscURBQW1DOztJQUNuQyxzREFBb0M7O0lBQ3BDLG1EQUFpQzs7SUFFakMsZ0VBQXVGOztJQWN2RixrREFHRTs7SUFkQSwwREFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUaW1lem9uZSwgVGltZXpvbmVNYXBQaWNrZXJTZXJ2aWNlfSBmcm9tICd0aW1lem9uZS1tYXAtcGlja2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3RoLXRpbWV6b25lLW5nLXNlbGVjdC1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vdGltZXpvbmUtbmctc2VsZWN0LXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgVGltZXpvbmVOZ1NlbGVjdFBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIHRpbWV6b25lczogQXJyYXk8VGltZXpvbmU+O1xuICBASW5wdXQoKSBwdWJsaWMgZGVmYXVsdFRpbWVab25lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBzaG93RHJvcERvd246IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBwdWJsaWMgc2hvd0hvdmVyOiBib29sZWFuID0gdHJ1ZTtcblxuICBASW5wdXQoKSBwdWJsaWMgaG92ZXJDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgc2VsZWN0Q2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgcHVibGljIG1hcENsYXNzOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIG9uVGltZVNlbGVjdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPFRpbWV6b25lPiA9IG5ldyBFdmVudEVtaXR0ZXI8VGltZXpvbmU+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHRpbWV6b25lU2VydmljZTogVGltZXpvbmVNYXBQaWNrZXJTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMudGltZXpvbmVzID0gdGltZXpvbmVTZXJ2aWNlLmdldEZ1bGxUaW1lem9uZUxpc3QoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghIXRoaXMuZGVmYXVsdFRpbWVab25lICYmIHRoaXMuZGVmYXVsdFRpbWVab25lICE9PSAnJykge1xuICAgICAgdGhpcy50aW1lem9uZVNlcnZpY2Uuc2V0VGltZXpvbmVCeUtleSh0aGlzLmRlZmF1bHRUaW1lWm9uZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdyb3VwQnkgPSAoaXRlbTpUaW1lem9uZSkgPT4ge1xuICAgIGNvbnN0IFtjb3VudHJ5LCB0aW1lem9uZV0gPSBpdGVtLnRpbWV6b25lLnNwbGl0KFwiL1wiKVxuICAgIHJldHVybiBjb3VudHJ5O1xuICB9O1xuXG4gIHB1YmxpYyB0aW1lem9uZVNlbGVjdGlvbkNoYW5nZSh0aW1lem9uZTogVGltZXpvbmUpIHtcbiAgICB0aGlzLm9uVGltZVNlbGVjdGlvbkNoYW5nZS5lbWl0KHRpbWV6b25lKTtcbiAgfVxuXG59XG4iXX0=