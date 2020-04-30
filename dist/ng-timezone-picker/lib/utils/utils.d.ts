export interface Timezone {
    timezone: string;
    country: string;
    pin?: string;
    offset: number;
    points?: string;
    zonename: string;
    selected?: boolean;
    sameOffset?: boolean;
}
export declare function findValue(key: any, value: any, data: any): Array<Timezone>;
export interface GenerateElementArgs {
    element: any;
    attr?: {
        [key: string]: any;
    };
    chilled?: boolean | number | string | Array<any>;
    isSvg?: boolean;
}
export declare function generateElement({ element, attr, chilled, isSvg }: GenerateElementArgs): any;
