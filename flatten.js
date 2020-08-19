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


module.exports = flatten 