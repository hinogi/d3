import ascending from "./ascending";

class d3_bisector{
    compare: Function;
    constructor(compare: Function){
        this.compare = compare;
    }
    
    left(a: Array<number>, x: number, lo?: number, hi?: number): number {
      if (arguments.length < 3) lo = 0;
      if (arguments.length < 4) hi = a.length;
      while (lo < hi) {
        let mid: number = lo + hi >>> 1;
        if (this.compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    }
    
    right (a: Array<number>, x: number, lo?: number, hi?: number): number {
      if (arguments.length < 3) lo = 0;
      if (arguments.length < 4) hi = a.length;
      while (lo < hi) {
        let mid: number = lo + hi >>> 1;
        if (this.compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
}

let d3_bisect = new d3_bisector(ascending);
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

function bisector(f: Function) {
  return new d3_bisector(f.length === 1
      ? function(d: any, x: any) { return ascending(f(d), x); }
      : f);
}

export {
    bisectLeft as bisectLeft,
    bisectRight as bisectRight,
    bisect as bisect,
    bisector as bisector
}