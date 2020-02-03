const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("😀" + `Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log("🙁" + `Assertion Failed: ${actual} !== ${expected}`);
  }
};

const headHunter = function(arr){
  let head = []
  for(i = 0; i < arr.length; i++){
    if(i === 0){
      head.push(arr[i])
      break
    }
  }
  
  return head[0]
}

assertEqual(headHunter([5,6,7]), 5);
assertEqual(headHunter(["Hello", "Lighthouse", "Labs"]), "Hello");

