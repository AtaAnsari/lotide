const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("😀" + `Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log("🙁" + `Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  for(i = 0; i < arr1.length; i++){
    for(j = i; j <= i; j++){
      if(arr1[i] !== arr2[j]){
        return false
      }
    }
  }
  return true
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false)
assertEqual(eqArrays([3, 2, 1], [1, 2, 3]), false)