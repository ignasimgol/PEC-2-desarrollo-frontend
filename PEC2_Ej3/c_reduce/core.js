function sum(array) {
  return array.reduce((acc, num) => acc + num, 0);
}

function productAll(array) {
  return array.reduce((acc, subArray) => acc * subArray.reduce((subAcc, num) => subAcc * num, 1), 1);
}

function objectify(array) {
  return array.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});
}

function luckyNumbers(array) {
  const lastNumber = array.pop();
  return `Your lucky numbers are: ${array.join(', ')}, and ${lastNumber}`;
}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers
};
