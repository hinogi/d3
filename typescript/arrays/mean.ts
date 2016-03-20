import {d3_number, d3_numeric} from "../math/number";

export function mean(array: number[]): number;
export function mean<T>(array: T[], accessor: (datum: T, index: number) => number): number;

export function mean(array: Array<any>, f?: Function): number {
  let s: number = 0,
      n: number = array.length,
      a: number,
      i: number = -1,
      j: number = n;
  if (arguments.length === 1) {
    while (++i < n) if (d3_numeric(a = d3_number(array[i]))) s += a; else --j;
  } else {
    while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) s += a; else --j;
  }
  if (j) return s / j;
}
