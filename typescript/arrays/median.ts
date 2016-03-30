import {d3_number, d3_numeric} from "../math/number";
import ascending from "./ascending";
import quantile from "./quantile";

export function median(array: Array<any>, f?: Function): number {
  let numbers: Array<number> = [],
      n: number = array.length,
      a: number,
      i: number = -1;
  if (arguments.length === 1) {
    while (++i < n) if (d3_numeric(a = d3_number(array[i]))) numbers.push(a);
  } else {
    while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) numbers.push(a);
  }
  if (numbers.length) return quantile(numbers.sort(ascending), 0.5);
};
