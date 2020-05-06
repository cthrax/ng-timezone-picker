import { EventEmitter, OnInit } from '@angular/core';
import { Timezone, TimezoneMapPickerService } from '@cthrax/timezone-map-picker';
export declare class TimezoneNgSelectPickerComponent implements OnInit {
    timezoneService: TimezoneMapPickerService;
    timezones: Array<Timezone>;
    defaultTimeZone: string;
    showDropDown: boolean;
    showHover: boolean;
    hoverClass: string;
    selectClass: string;
    mapClass: string;
    onTimeSelectionChange: EventEmitter<Timezone>;
    constructor(timezoneService: TimezoneMapPickerService);
    ngOnInit(): void;
    groupBy: (item: Timezone) => string;
    timezoneSelectionChange(timezone: Timezone): void;
}
