import { Timezone } from './utils';
export declare class TimezonePickerService {
    timezones: Array<Timezone>;
    constructor();
    getFullTimezoneList(): Timezone[];
    getTimeZoneObject(value: any, attribute?: any): Timezone;
    getSystemTimezone(): Timezone;
    unselectCurrent(): void;
    setTimezoneByKey(zonename: string): void;
    findTimezone(key: any, value: any): Timezone;
}
