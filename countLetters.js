const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("😀" + `Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log("🙁" + `Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let result = {};
  let arrayOfLetters = string.split('');
  for (let letter of arrayOfLetters) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  console.log(result);
  return result;
};

const string = "banana";

const result = countLetters(string);

assertEqual(result["b"], 1);

assertEqual(result["a"], 3);

assertEqual(result["x"], undefined);