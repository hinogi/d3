export default function pairs<T>(array: Array<T>): Array<[T, T]> {
  let i = 0, n = array.length - 1, p0: T, p1: T = array[0], pairs = new Array(n < 0 ? 0 : n);
  while (i < n) pairs[i] = [p0 = p1, p1 = array[++i]];
  return pairs;
}
