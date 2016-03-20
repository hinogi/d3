import {Primitive} from "../types/primitive";

function descending(a: Primitive, b: Primitive): number {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}

export { descending as d3_decending};