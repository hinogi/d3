import {map} from "../arrays/map";

export interface Nest<T> {
    key(func: (datum: T) => string): Nest<T>;
    sortKeys(comparator: (a: string, b: string) => number): Nest<T>;
    sortValues(comparator: (a: T, b: T) => number): Nest<T>;
    rollup<U>(func: (values: T[]) => U): Nest<T>;
    map(array: T[]): { [key: string]: any };
    map(array: T[], mapType: typeof map): Map<any, any>;
    entries(array: T[]): { key: string; values: any }[];
}