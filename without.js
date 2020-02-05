const without = function (original, itemsToRemove) {
  let result = []
  let foundMatch = false
  for (i = 0; i < original.length; i++) {
    for (j = 0; j < itemsToRemove.length; j++) {
      if (original[i] === itemsToRemove[j]) {
        foundMatch = true

      }
    }
    if (!foundMatch) {
      result.push(original[i])
    }
  }
  return result
}


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

  assertArraysEqual(without([1,2,3], [3,4]), [1,2])

