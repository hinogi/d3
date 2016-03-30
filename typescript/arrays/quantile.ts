// R-7 per <http://en.wikipedia.org/wiki/Quantile>
export default function quantile(values: Array<number>, p: number): number {
  let H: number = (values.length - 1) * p + 1,
      h: number = Math.floor(H),
      v: number = +values[h - 1],
      e: number = H - h;
  return e ? v + e * (values[h] - v) : v;
}
