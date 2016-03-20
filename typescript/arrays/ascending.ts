import {Primitive} from "../types/primitive";

export function ascending(a: Primitive, b: Primitive): number {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

export { ascending as d3_ascending};