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

module.exports = eqArrays;