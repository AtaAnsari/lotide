const assertArraysEqual = function(arr1, arr2) {
  for(i = 0; i < arr1.length; i++){
    for(j = i; j <= i; j++){
      if(arr1[i] !== arr2[j]){
        return console.log("🙁" + `Assertion Failed: [${arr1}] !== [${arr2}]`)
        
      }
    }
  }
  return console.log("😀" + `Assertion Passed: [${arr1}] === [${arr2}]`);
};


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  newArray = []
  for(i =0; i < array.length; i++){
    newArray.push(callback(array[i]))
  }
  return newArray
}

const results1 = map(words, word => word[0]);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"])

