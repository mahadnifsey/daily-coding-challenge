// pick a set of first elements
function first(arr, n) {
    if (n === undefined) {
      return arr.slice(0, 1);
    }
    return arr.slice(0, n);
};

// Alt Method
function first(arr, n=1) {
    return arr.slice(0,n);
};

// Alt Method 2
function first(arr, n) {
    return n === undefined ? arr.slice(0, 1) : arr.slice(0, n);
};