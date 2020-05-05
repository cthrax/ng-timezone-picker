import { Injectable, ɵɵdefineInjectable, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { __read } from 'tslib';
import { TimezoneMapPickerService, TimezoneMapPickerModule } from 'timezone-map-picker';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TimezoneNgSelectPickerService = /** @class */ (function () {
    function TimezoneNgSelectPickerService() {
    }
    TimezoneNgSelectPickerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TimezoneNgSelectPickerService.ctorParameters = function () { return []; };
    /** @nocollapse */ TimezoneNgSelectPickerService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TimezoneNgSelectPickerService_Factory() { return new TimezoneNgSelectPickerService(); }, token: TimezoneNgSelectPickerService, providedIn: "root" });
    return TimezoneNgSelectPickerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            var _a = __read(item.timezone.split("/"), 2), country = _a[0], timezone = _a[1];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TimezoneNgSelectPickerModule = /** @class */ (function () {
    function TimezoneNgSelectPickerModule() {
    }
    TimezoneNgSelectPickerModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TimezoneNgSelectPickerComponent],
                    imports: [
                        NgSelectModule,
                        BrowserModule,
                        FormsModule,
                        TimezoneMapPickerModule
                    ],
                    exports: [TimezoneNgSelectPickerComponent]
                },] }
    ];
    return TimezoneNgSelectPickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TimezoneNgSelectPickerComponent, TimezoneNgSelectPickerModule, TimezoneNgSelectPickerService };
//# sourceMappingURL=cthrax-timezone-picker.js.map
