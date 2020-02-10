  const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("😀" + `Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log("🙁" + `Assertion Failed: ${actual} !== ${expected}`);
  }
};


const object = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

const findKey = function(object, callback) {
  const keyArray = Object.keys(object);
  for (let key of keyArray) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

const results1 = findKey(object, x => x.stars === 2);

const results2 = findKey(object, x => x.stars === 0);

assertEqual(results1, "noma");

assertEqual(results2, undefined);