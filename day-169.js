// Grasshopper - Array Mean
// Find the mean (average) of a list of numbers in an array.
var findAverage = function (nums) {
    // Code here
    var sum = 0;
    for (num in nums) {
      sum += nums[num];
    }
    return sum / (nums.length);
};

// Alternative Method
const findAverage = function (nums) {
    return nums.reduce(function(a,b){
      return a+b;
    }) / nums.length;
};

// Alternative Method 2
const findAverage = nums => nums.reduce((a, b) => a + b) / nums.length;
