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

module.exports = middleIdentifier;
