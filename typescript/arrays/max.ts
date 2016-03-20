import {Numeric} from "../types/Numeric";

/**
 * Return the maximum value in the array of numbers using natural order.
 */
export function max(array: number[]): number;

/**
 * Return the maximum value in the array of strings using natural order.
 */
export function max(array: string[]): string;

/**
 * Return the maximum value in the array of numbers using natural order.
 */
export function max<T extends Numeric>(array: T[]): T;

/**
 * Return the maximum value in the array using natural order and a projection function to map values to numbers.
 */
export function max<T>(array: T[], accessor: (datum: T, index: number) => number): number;

/**
 * Return the maximum value in the array using natural order and a projection function to map values to strings.
 */
export function max<T>(array: T[], accessor: (datum: T, index: number) => string): string;

/**
 * Return the maximum value in the array using natural order and a projection function to map values to easily-sorted values.
 */
export function max<T, U extends Numeric>(array: T[], accessor: (datum: T, index: number) => U): U;

export function max(array: Array<any>, f?: Function): any {
  let i: number = -1,
      n: number = array.length,
      a: any,
      b: any;
  if (arguments.length === 1) {
    while (++i < n) if ((b = array[i]) != null && b >= b) { a = b; break; }
    while (++i < n) if ((b = array[i]) != null && b > a) a = b;
  } else {
    while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) { a = b; break; }
    while (++i < n) if ((b = f.call(array, array[i], i)) != null && b > a) a = b;
  }
  return a;
}
