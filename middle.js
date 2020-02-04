const middleIdentifier = function(arr) {
  if(arr.length === 1 || arr.length === 0) {
    return []
  } else if (arr.length % 2 !== 0) {
    let middleIndex = (Math.ceil(arr.length/2)) - 1;
    let middleArr = []
    middleArr.push(arr[middleIndex])
    return middleArr;
  } else if (arr.length % 2 === 0) {
    let middleIndex1 = (arr.length/2) -1;
    let middleIndex2 = middleIndex1 + 1;
    let middleArr = []
    middleArr.push(arr[middleIndex1])
    middleArr.push(arr[middleIndex2])
    return middleArr
  }
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

assertArraysEqual(middleIdentifier([1,2,3,4,5,6,7]), [4])

assertArraysEqual(middleIdentifier([1,2,3,4,5,6,7,8]), [4,5])