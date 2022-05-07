// Sum Arrays
// Write a function that takes an array of numbers and returns the sum of the numbers.
// The numbers can be negative or non-integer. If the array does not contain any numbers
// then you should return 0.

function sum (numbers) {
    // somewhere to store the sum, initial value of 0.
    let total = 0;
    // iterate over the array of numbers
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    // return sum;
    return total;
};

// Testing Code
console.log(sum([]), 0);
console.log(sum([1, 5.2, 4, 0, -1]), 9.2);
console.log(sum([-2.398]), -2.398);


// Alternative Method