import {d3_numeric} from "../math/number";

/**
 * Compute the sum of an array of numbers.
 */
export function sum(array: number[]): number;

/**
 * Compute the sum of an array, using the given accessor to convert values to numbers.
 */
export function sum<T>(array: T[], accessor: (datum: T, index: number) => number): number;

export default function sum<T>(array: Array<T> | Array<number>, f?: (datum: T, index: number) => number):number {
  let s: number = 0,
      n: number = array.length,
      a: number,
      i: number = -1;
  if (arguments.length === 1) {
    while (++i < n) if (d3_numeric(a = +array[i])) s += a; // zero and null are equivalent
  } else {
    while (++i < n) if (d3_numeric(a = +f.call(array, array[i], i))) s += a;
  }
  return s;
}
