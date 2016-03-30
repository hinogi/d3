import abs from "../math/abs";

export default function range(start: number, stop: number, step?: number): Array<number> {
  if (arguments.length < 3) {
    step = 1;
    if (arguments.length < 2) {
      stop = start;
      start = 0;
    }
  }
  if ((stop - start) / step === Infinity) throw new Error("infinite range");
  let range: Array<number> = [],
       k: number = d3_range_integerScale(abs(step)),
       i: number = -1,
       j: number;
  start *= k, stop *= k, step *= k;
  if (step < 0) while ((j = start + step * ++i) > stop) range.push(j / k);
  else while ((j = start + step * ++i) < stop) range.push(j / k);
  return range;
};

function d3_range_integerScale(x: number): number {
  let k: number = 1;
  while (x * k % 1) k *= 10;
  return k;
}
