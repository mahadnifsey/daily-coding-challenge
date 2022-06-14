// Removing Elements
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
function removeEveryOther(arr){
    let newArr=[];
  for (let i = 0; i < arr.length; i+=2){
    newArr.push(arr[i]);
    }
  return newArr;
  };

// Alternative Methods
function removeEveryOther(arr){
    //your code here
    for (var i = 1; i < arr.length;i++){
        arr.splice(i,1);
    }
    return arr;
  };

// Alternative Method 2
const removeEveryOther = arr => arr.filter((_, i) => !(i % 2));