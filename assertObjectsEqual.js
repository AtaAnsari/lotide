const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("😀" + `Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log("🙁" + `Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if(arr1.length !== arr2.length){
    return false
  }
    for(i = 0; i < arr1.length; i++){
      for(j = i; j <= i; j++){
        if(arr1[i] !== arr2[j]){
          return false
        }
      }
    }
    return true
  }


const eqObjects = function(object1, object2) {
  const object1KeysArr = Object.keys(object1);
  const object2KeysArr = Object.keys(object2);
  let foundMatch = true;
  if (object1KeysArr.length !== object2KeysArr.length) {
    return false;
  } else {
    for (let object1key of object1KeysArr) {
      if (!object2[object1key]){
        return false
      }
      if(Array.isArray(object1[object1key])) {
        if(!eqArrays(object1[object1key], object2[object1key])){return false}
      } else {
        if (object1[object1key] !== object2[object1key]) {
          return false
        }
      }
    }
    return foundMatch;
  }
};

const assertObjectsEqual = function(object1, object2){
  const inspect = require('util').inspect;

  if(!eqObjects(object1, object2)) {return console.log("🙁" + `Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`)} else {
    return console.log("😀" + `Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`)
  }
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cab = { c: "3", a: "1", b: "3" };
const xyz = { x: "3", y: "1", z: "2" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);
