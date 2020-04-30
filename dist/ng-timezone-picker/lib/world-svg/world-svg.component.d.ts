import { OnInit } from '@angular/core';
import { Timezone } from '../utils';
import { TimezonePickerService } from '../timezone-picker.service';
export declare class WorldSvgComponent implements OnInit {
    private timezoneService;
    timezones: Array<Timezone>;
    width: number;
    height: number;
    readonly viewBox: string;
    constructor(timezoneService: TimezonePickerService);
    ngOnInit(): void;
    areaSelected(timezone: any): void;
    mouseEnter(selected: any): void;
    mouseLeave(selected: any): void;
}
