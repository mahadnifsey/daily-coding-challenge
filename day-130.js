// Remove duplicates from list
// Define a function that removes duplicates from an array of numbers and returns it as a result.
// The order of the sequence has to stay the same.
function distinct(arr) {
    let res = []; 
    
    for(let i = 0; i < arr.length; i++){
      if(!res.includes(arr[i])){
        res.push(arr[i]);
      }
  }
  return res;
};

// Alternative Method
const distinct = a => a.filter((item, index) => a.indexOf(item) === index);