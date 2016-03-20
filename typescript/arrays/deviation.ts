import variance from "./variance";

export function deviation(array: number[]): number;
export function deviation<T>(array: T[], accessor: (datum: T, index: number) => number): number;

export function deviation(): number {
  let v = variance.apply(this, arguments);
  return v ? Math.sqrt(v) : v;
}
