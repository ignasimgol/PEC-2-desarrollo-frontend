function multiplyBy10(array) {
  return array.map(num => num * 10);
}

function shiftRight(array) {
  return [array[array.length - 1], ...array.slice(0, array.length - 1)];
}

function onlyVowels(array) {
  return array.map(word => word.replace(/[^aeiou]/gi, ""));
}

function doubleMatrix(matrix) {
  return matrix.map(row => row.map(num => num * 2));
}

module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix
};
