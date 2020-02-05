const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("😀" + `Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log("🙁" + `Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  const object1KeysArr = Object.keys(object1);
  const object2KeysArr = Object.keys(object2);
  let foundMatch = false;
  if (object1KeysArr.length !== object2KeysArr.length) {
    return foundMatch;
  } else {
    for (let object1key of object1KeysArr) {
      for (let object2key of object2KeysArr) {
        if (object1key === object2key) {
          if (object1[object1key] === object2[object2key]) {
            foundMatch = true;
          } else {
          return foundMatch = false;
          }
        }
      }
    }
    console.log(foundMatch);
    return foundMatch;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cba = { c: "1", b: "2", a: "1" };
const cab = { c: "3", a: "1", b: "2" };
const xyz = { x: "3", y: "1", z: "2" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const ce = { c: "1", e: ["2", 3] };
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(abc, cab), true);
assertEqual(eqObjects(cba, cab), false);
assertEqual(eqObjects(cab, xyz), false);

// assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(ce, dc), false);