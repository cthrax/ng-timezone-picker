import { Timezone } from './types';
export declare class TimezoneMapPickerService {
    timezones: Array<Timezone>;
    constructor();
    hovered: Timezone;
    private _selected;
    selected: Timezone;
    getFullTimezoneList(): Timezone[];
    getTimeZoneObject(value: any, attribute?: any): Timezone;
    getSystemTimezone(): Timezone;
    unselectCurrent(): void;
    setTimezoneSelected(timezone: Timezone): void;
    setTimezoneByKey(zonename: string): void;
    findTimezone(key: any, value: any): Timezone;
}
