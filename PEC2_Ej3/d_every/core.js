// Check to see if all elements in an array
// are even numbers.
function allEven(input) {
  return input.every(num => num % 2 === 0);
}

// Check to see if all elements in an array
// are of the same type.
function allSameType(input) {
  return input.every(item => typeof item === typeof input[0]);
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.
function positiveMatrix(input) {
  return input.every(arr => 
    Array.isArray(arr) && arr.every(num => num > 0)
  );
}

// Check that all items in an array are strings
// and that they all only contain the same vowels.
// Check that all items in an array are strings
// and that they all only contain the same vowels.
function allSameVowels(input) {
  // Helper function to extract and sort vowels from a string
  const getVowels = (str) => str.match(/[aeiou]/gi)?.sort().join('') || '';

  // First, check if all items are strings
  if (!input.every(item => typeof item === 'string')) {
    return false;
  }

  // Get the vowels from the first string
  const firstVowelSet = getVowels(input[0]);

  // Check if all other strings have the same vowel set
  return input.every(item => getVowels(item) === firstVowelSet);
}


module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
};

