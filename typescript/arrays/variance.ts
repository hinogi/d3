import {d3_number, d3_numeric} from "../math/number";

export function variance(array: number[]): number;

export function variance<T>(array: T[], accessor: (datum: T, index: number) => number): number;

export default function variance<T>(array: Array<number> | Array<T>, f?: (datum: T, index: number) => number): number {
  let n: number = array.length,
      m: number = 0,
      a: number,
      d: number,
      s: number = 0,
      i: number = -1,
      j: number = 0;
  if (arguments.length === 1) {
    while (++i < n) {
      if (d3_numeric(a = d3_number(array[i]))) {
        d = a - m;
        m += d / ++j;
        s += d * (a - m);
      }
    }
  } else {
    while (++i < n) {
      if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) {
        d = a - m;
        m += d / ++j;
        s += d * (a - m);
      }
    }
  }
  if (j > 1) return s / (j - 1);
}
