import min from "./min";

export default function transpose(matrix) {
  if (!(n = matrix.length)) return [];
  for (let i = -1, m = min(matrix, d3_transposeLength), transpose = new Array(m); ++i < m;) {
    for (let j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
};

function d3_transposeLength(d) {
  return d.length;
}
