const tail = function(arr) {
  let head = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== 0) {
      head.push(arr[i]);
    }
  }
  
  return head;
};

module.exports = tail



