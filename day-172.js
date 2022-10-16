// Formatting decimal places #0
// Each number should be formatted that it is rounded to two decimal places.
// You don't need to check whether the input is a valid number because only valid numbers are used in the tests.
function twoDecimalPlaces(n) {
    return Math.floor(n*100+0.5)/100;
};

// Alternative Method
function twoDecimalPlaces(n) {
    return Math.round(n*100)/100;
};

// Alternative Method 2
const twoDecimalPlaces = n => Number(n.toFixed(2))