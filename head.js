const assertEqual = require('./assertEqual');


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

module.exports = headHunter

