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

const letterPositions = function(sentence) {
  let results = {};
  let sentenceArray = sentence.split('');
  for (let i = 0; i < sentenceArray.length; i++) {
    if (sentenceArray[i] !== " ") {
      if (results[sentenceArray[i]]) {
        results[sentenceArray[i]].push(i);
      } else {
        results[sentenceArray[i]] = [];
        results[sentenceArray[i]].push(i);
      }
    }
  }
  console.log(results);
  return results;
};

const sentence = "hello";

const resultObject = letterPositions(sentence);

assertArraysEqual(resultObject["h"], [0]);

assertArraysEqual(resultObject["e"], [1]);