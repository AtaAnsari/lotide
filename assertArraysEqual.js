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

module.exports = assertArraysEqual;