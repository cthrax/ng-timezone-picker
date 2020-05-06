import { EventEmitter, OnInit } from '@angular/core';
import { TimezoneMapPickerService } from '../timezone-map-picker.service';
import { Timezone } from '../types';
export declare class WorldSvgComponent implements OnInit {
    private timezoneService;
    timezones: Array<Timezone>;
    width: number;
    height: number;
    defaultTimezone: string;
    timezoneSelected: EventEmitter<Timezone>;
    hoverChanged: EventEmitter<Timezone>;
    readonly viewBox: string;
    constructor(timezoneService: TimezoneMapPickerService);
    ngOnInit(): void;
    areaSelected(timezone: any): void;
    mouseEnter(selected: any): void;
    mouseLeave(selected: any): void;
}
