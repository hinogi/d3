import {Primitive} from "../types/Primitive";
import {Numeric} from "../types/Numeric";

/**
 * Return the min and max simultaneously.
 */
export function extent(array: number[]): [number, number];

/**
 * Return the min and max simultaneously.
 */
export function extent(array: string[]): [string, string];

/**
 * Return the min and max simultaneously.
 */
export function extent<T extends Numeric>(array: T[]): [T, T];

/**
 * Return the min and max simultaneously.
 */
export function extent<T extends Numeric>(array: Array<T | Primitive>): [T | Primitive, T | Primitive];

/**
 * Return the min and max simultaneously.
 */
export function extent<T>(array: T[], accessor: (datum: T, index: number) => number): [number, number];

/**
 * Return the min and max simultaneously.
 */
export function extent<T>(array: T[], accessor: (datum: T, index: number) => string): [string, string];

/**
 * Return the min and max simultaneously.
 */
export function extent<T, U extends Numeric>(array: U[], accessor: (datum: T, index: number) => U): [U | Primitive, U | Primitive];

export function extent(array: Array<any>, f?: any): [any , any] {
  let i: number = -1,
      n: number = array.length,
      a: any,
      b: any,
      c: any;
  if (arguments.length === 1) {
    while (++i < n) if ((b = array[i]) != null && b >= b) { a = c = b; break; }
    while (++i < n) if ((b = array[i]) != null) {
      if (a > b) a = b;
      if (c < b) c = b;
    }
  } else {
    while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) { a = c = b; break; }
    while (++i < n) if ((b = f.call(array, array[i], i)) != null) {
      if (a > b) a = b;
      if (c < b) c = b;
    }
  }
  return [a, c];
}
