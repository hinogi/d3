import {Numeric} from "../types/Numeric";

/**
 * Return the minimum value in the array using natural order.
 */
export function min(array: number[]): number;

/**
 * Return the minimum value in the array using natural order.
 */
export function min(array: string[]): string;

/**
 * Return the minimum value in the array using natural order.
 */
export function min<T extends Numeric>(array: T[]): T;

/**
 * Return the minimum value in the array using natural order.
 */
export function min<T>(array: T[], accessor: (datum: T, index: number) => number): number;

/**
 * Return the minimum value in the array using natural order.
 */
export function min<T>(array: T[], accessor: (datum: T, index: number) => string): string;

/**
 * Return the minimum value in the array using natural order.
 */
export function min<T, U extends Numeric>(array: T[], accessor: (datum: T, index: number) => U): U;

export function min(array: Array<any>, f?: Function): number {
  let i: number = -1,
      n: number = array.length,
      a: any,
      b: any;
  if (arguments.length === 1) {
    while (++i < n) if ((b = array[i]) != null && b >= b) { a = b; break; }
    while (++i < n) if ((b = array[i]) != null && a > b) a = b;
  } else {
    while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) { a = b; break; }
    while (++i < n) if ((b = f.call(array, array[i], i)) != null && a > b) a = b;
  }
  return a;
}
