import {d3_ascending} from "./ascending";

function d3_bisector(compare: Function): any {
  return {
    left: function(a: Array<number>, x: number, lo?: number, hi?: number): number {
      if (arguments.length < 3) lo = 0;
      if (arguments.length < 4) hi = a.length;
      while (lo < hi) {
        let mid: number = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a: Array<number>, x: number, lo?: number, hi?: number): number {
      if (arguments.length < 3) lo = 0;
      if (arguments.length < 4) hi = a.length;
      while (lo < hi) {
        let mid: number = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
}

let d3_bisect = d3_bisector(d3_ascending);
let bisectLeft = d3_bisect.left;
let bisectRight = d3_bisect.right;
let bisect = bisectRight;

function bisector<T, U>(accessor: (x: T) => U): {
    left: (array: T[], x: U, lo?: number, hi?: number) => number;
    right: (array: T[], x: U, lo?: number, hi?: number) => number;
}

function bisector<T, U>(comparator: (a: T, b: U) => number): {
    left: (array: T[], x: U, lo?: number, hi?: number) => number;
    right: (array: T[], x: U, lo?: number, hi?: number) => number;
}

function bisector(f: Array<any> | any) {
  return d3_bisector(f.length === 1
      ? function(d: any, x: any) { return d3_ascending(f(d), x); }
      : f);
}

export {
    bisectLeft as bisectLeft,
    bisectRight as bisectRight,
    bisect as bisect,
    bisector as bisector
}