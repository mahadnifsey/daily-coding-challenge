// Enumerable Magic #25 - Take the First N Elements
function take(arr, n) {
    let counter = 0;
    let res = [];
    for (let i of arr) {
      counter += 1;
      if (counter <= n && counter <= arr.length) {
        res.push(i);
      }
    }
    return res;
};

// Alternative Method

function take(arr, n) {
    return arr.slice(0, n);
};