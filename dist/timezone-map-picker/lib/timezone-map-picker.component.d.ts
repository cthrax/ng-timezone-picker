import { EventEmitter, OnInit } from '@angular/core';
import { TimezoneMapPickerService } from './timezone-map-picker.service';
import { Timezone } from './types';
export declare class TimezoneMapPickerComponent implements OnInit {
    private timezoneService;
    timezones: any;
    defaultTimezone: string;
    width: number;
    height: number;
    timezoneSelected: EventEmitter<Timezone>;
    hoverChanged: EventEmitter<Timezone>;
    readonly dimensions: {
        height: number;
        width: number;
    };
    constructor(timezoneService: TimezoneMapPickerService);
    timezoneAreaSelected(timezone: Timezone): void;
    timezoneHoverChanged(timezone: Timezone): void;
    ngOnInit(): void;
}
