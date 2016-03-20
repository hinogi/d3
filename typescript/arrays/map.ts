/// <reference path="../typings/main/ambient/es6-shim/index.d.ts" />

/**
 * Constructs an initially empty map.
 */
export function map<T, U>(): Map<T, U>;

/**
 * Construct a new map by copying keys and values from the given one.
 */
export function map<T, U>(object: Map<T, U>): Map<T, U>;

/**
 * Construct a new map by copying enumerable properties and values from the given object.
 */
export function map<T, U>(object: { [key: string]: T }): Map<T, U>;

/**
 * Construct a new map by copying enumerable properties and values from the given object.
 */
export function map<T, U>(object: { [key: number]: T }): Map<T, U>;

/**
 * Construct a new map by copying elements from the array. The key function is used to identify each object.
 */
export function map<T, U>(array: T[], key: (datum: T, index: number) => string): Map<T, U>;

/**
 * Construct a new map by copying enumerable properties and values from the given object.
 */

export function map(object?: any, f?: Function): Map<any, any> {
  let map = new Map();
  if (object instanceof Map) {
    object.forEach((key: any, value: any) => { map.set(key, value); });
  } else if (Array.isArray(object)) {
    let i: number = -1,
        n: number = object.length,
        o: any;
    if (arguments.length === 1) while (++i < n) map.set(i, object[i]);
    else while (++i < n) map.set(f.call(object, o = object[i], i), o);
  } else {
    for (let key in object) map.set(key, object[key]);
  }
  return map;
}