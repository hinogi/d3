export default function shuffle<T>(array: Array<T>, i0?: number, i1?: number): Array<T> {
    let m: number,
        t: T,
        i: number;
  if ((m = arguments.length) < 3) { i1 = array.length; if (m < 2) i0 = 0; }
  m = i1 - i0, t, i;
  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m + i0], array[m + i0] = array[i + i0], array[i + i0] = t;
  }
  return array;
}
