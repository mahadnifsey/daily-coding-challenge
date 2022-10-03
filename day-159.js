// Area of a Square
// Complete the function that calculates the area of the red square, 
// when the length of the circular arc A is given as the input. 
// Return the result rounded to two decimals.
function squareArea(A){
    return +Math.pow(2 * A / Math.PI, 2).toFixed(2)
};

// Alternative Method
squareArea = A => +Math.pow((2 * A / 3.1416), 2).toFixed(2);

