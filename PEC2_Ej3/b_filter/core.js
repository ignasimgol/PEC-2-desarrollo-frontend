function onlyEven(array) {
  return array.filter(num => num % 2 === 0);
}

function onlyOneWord(array) {
  return array.filter(str => !str.includes(" "));
}

function positiveRowsOnly(array) {
  return array.filter(row => row.every(num => num > 0));
}

function allSameVowels(array) {
  return array.filter(word => {
    const vowels = word.match(/[aeiou]/gi);
    return vowels && vowels.every(v => v.toLowerCase() === vowels[0].toLowerCase());
  });
}

module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels
};
