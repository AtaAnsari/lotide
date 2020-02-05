const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("😀" + `Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log("🙁" + `Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(showsTable, show) {
  let showGenre;
  let genreArray = Object.keys(showsTable);
  for (let genre of genreArray) {
    if (bestTVShowsByGenre[genre] === show) {
      showGenre = genre;
    }
  }
  console.log(showGenre);
  return showGenre;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
