import { Injectable, ɵɵdefineInjectable, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { TimezoneMapPickerService, TimezoneMapPickerModule } from '@cthrax/timezone-map-picker';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TimezoneNgSelectPickerService {
    constructor() { }
}
TimezoneNgSelectPickerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TimezoneNgSelectPickerService.ctorParameters = () => [];
/** @nocollapse */ TimezoneNgSelectPickerService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TimezoneNgSelectPickerService_Factory() { return new TimezoneNgSelectPickerService(); }, token: TimezoneNgSelectPickerService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TimezoneNgSelectPickerComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TimezoneNgSelectPickerModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TimezoneNgSelectPickerComponent, TimezoneNgSelectPickerModule, TimezoneNgSelectPickerService };
//# sourceMappingURL=cthrax-timezone-ng-select-picker.js.map
