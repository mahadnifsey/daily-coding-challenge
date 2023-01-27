// Enumerable Magic #1 - True for All?
function all(arr, fun) {
    return arr.every(fun);
};

// Alternative Method
function all(arr, fun)
{
  var length = arr.length;
  
  for (var i=0; i<length; ++i)
    if (!fun(arr[i]))
      return false;
  
  return true;
};

// Alternative Method 2
const all = ( arr, fun ) => arr.every( fun );