import {Primitive} from "../types/primitive";

export default function descending(a: Primitive, b: Primitive): number {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}