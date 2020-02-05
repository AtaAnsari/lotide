const flatten = function(original){
  let flatArray = []
  let flattenedPiece = ""
  for(i = 0; i < original.length; i++) {
    if(typeof original[i] === "number"){
      flatArray.push(original[i])
    } else if(original[i] !== "number"){
      console.log(original[i])
      for(j = 0; j < original[i].length; j++){
        flatArray.push(original[i][j])
      }
      
    }
  }
  return flatArray
};

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

assertArraysEqual(flatten([1,2,3,[4,5,6],7,8]), [1,2,3,4,5,6,7,8])
