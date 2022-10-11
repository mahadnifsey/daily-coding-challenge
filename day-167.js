// Sum of differences in array
// Your task is to sum the differences between 
// consecutive pairs in the array in descending order.
function sumOfDifferences(arr) {
    arr.sort((a, b) => a - b);
    let b = 0;
    for(let a = arr.length - 1; a > 0; a--) {
      b += arr[a] - arr[a - 1];
    }
    return b;
};

// Alternative Method
function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
};

// Alternative Method 2
function sumOfDifferences(arr) {
    let sorted = arr.sort((a, b) => b - a)
    let sum = 0;
    for (let i = 0; i < sorted.length - 1; i++) {
      sum += (arr[i] - arr[i + 1]);
    }
    return sum;
};