const assertArraysEqual = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i; j <= i; j++) {
      if (arr1[i] !== arr2[j]) {
        return console.log("🙁" + `Assertion Failed: [${arr1}] !== [${arr2}]`);

      }
    }
  }
  return console.log("😀" + `Assertion Passed: [${arr1}] === [${arr2}]`);
};

const takeUntil = function(array, callback) {
  let sliceEndIndex = "";
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      sliceEndIndex = i;
      newArray = array.slice(0, sliceEndIndex);
      return newArray;
    }
  }
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

