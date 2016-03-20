/**
 * Merges the specified arrays into a single array.
 */

export function merge<T>(arrays: Array<Array<T>>): Array<T> {
  let n: number = arrays.length,
      m: number,
      i: number = -1,
      j: number = 0,
      merged: Array<T>,
      array: Array<T>;

  while (++i < n) j += arrays[i].length;
  merged = new Array(j);

  while (--n >= 0) {
    array = arrays[n];
    m = array.length;
    while (--m >= 0) {
      merged[--j] = array[m];
    }
  }

  return merged;
}
