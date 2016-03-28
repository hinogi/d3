import {Primitive} from "../types/primitive";

export default function ascending(a: Primitive, b: Primitive): number {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}