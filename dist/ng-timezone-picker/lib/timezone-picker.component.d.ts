import { EventEmitter, OnInit } from '@angular/core';
import { Timezone } from './utils';
import { TimezonePickerService } from './timezone-picker.service';
export declare class TimezonePickerComponent implements OnInit {
    private timezoneService;
    timezones: any;
    defaultTimezone: string;
    width: number;
    height: number;
    dayLightSaving: boolean;
    hoverTextChanged: EventEmitter<Timezone>;
    mapSelectionChanged: EventEmitter<Timezone>;
    readonly dimensions: {
        height: number;
        width: number;
    };
    constructor(timezoneService: TimezonePickerService);
    ngOnInit(): void;
    addMomentProperties(): void;
}
