
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (typeof matrix == "undefined" || matrix.length == 0) {
    return [];
  } else if (matrix.length >= 0){
    arr = matrix[0];
    for (let i = 1; i < matrix.length; i++) {
      if (i % 2 == 0) {
        arr = arr.concat(matrix[i]);
      } else {
        matrix[i].reverse();
      arr = arr.concat(matrix[i]);
      }
    }
    return arr;
  }
}
