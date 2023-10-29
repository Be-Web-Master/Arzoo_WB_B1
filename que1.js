// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

// Example 1:

// Input: word = "USA"
// Output: true
// Example 2:

// Input: word = "FlaG"
// Output: false

const str = "FlaG";

function usageOfCapitals(str) {
  const capLtr = str.toUpperCase();
  const smallLtr = str.toLowerCase();
  const oneCapLtr = str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();

  if (str === capLtr) {
    return true;
  } else if (str === smallLtr) {
    return true;
  } else if (str === oneCapLtr) {
    return true;
  }
  return false;
}
console.log(usageOfCapitals(str));
