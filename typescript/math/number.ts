export function d3_number(x) {
  return x === null ? NaN : +x;
}

export function d3_numeric(x) {
  return !isNaN(x);
}
