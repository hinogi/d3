/// <reference path="../../typings/main/ambient/es6-shim/index.d.ts" />
/**
 * Constructs an initially empty map.
 */
export declare function map<T, U>(): Map<T, U>;
/**
 * Construct a new map by copying keys and values from the given one.
 */
export declare function map<T, U>(object: Map<T, U>): Map<T, U>;
/**
 * Construct a new map by copying enumerable properties and values from the given object.
 */
export declare function map<T, U>(object: {
    [key: string]: T;
}): Map<T, U>;
/**
 * Construct a new map by copying enumerable properties and values from the given object.
 */
export declare function map<T, U>(object: {
    [key: number]: T;
}): Map<T, U>;
/**
 * Construct a new map by copying elements from the array. The key function is used to identify each object.
 */
export declare function map<T, U>(array: T[], key: (datum: T, index: number) => string): Map<T, U>;
