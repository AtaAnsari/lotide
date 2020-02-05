const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("😀" + `Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log("🙁" + `Assertion Failed: ${actual} !== ${expected}`);
  }
};



const countOnly = function(allItems, itemsToCount) {
  let itemsToCountArray = Object.keys(itemsToCount)
  const results = {}
  for (const item of allItems) {
    for(let countableItem of itemsToCountArray) {
      if(item === countableItem){
        if(typeof results[item] !== "number"){
          results[item] = 1
        } else if (typeof results[item] === "number"){
          results[item] += 1
        }
      }
    }
  }
  console.log(results)
  return results;

}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
