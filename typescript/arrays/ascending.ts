import {Primitive} from "../types/primitive";

function d3_ascending(a: Primitive, b: Primitive): number {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

export {d3_ascending as d3_ascending};