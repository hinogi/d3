import {d3_ascending} from "./ascending";



function d3_bisector(compare) {
  return {
    left: function(a, x, lo, hi) {
      if (arguments.length < 3) lo = 0;
      if (arguments.length < 4) hi = a.length;
      while (lo < hi) {
        let mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (arguments.length < 3) lo = 0;
      if (arguments.length < 4) hi = a.length;
      while (lo < hi) {
        let mid = lo + hi >>> 1;
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

function bisector(f) {
  return d3_bisector(f.length === 1
      ? function(d, x) { return d3_ascending(f(d), x); }
      : f);
};

export {
    bisectLeft as bisectLeft,
    bisectRight as bisectRight,
    bisect as bisect,
    bisector as bisector
}