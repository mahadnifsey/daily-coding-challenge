// Difference of Volumes of Cuboids
// In this simple exercise, you will create a program that will take two lists of integers, a and b. 
// Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. 
// You must find the difference of the cuboids' volumes regardless of which is bigger.
function find_difference(a, b) {
    return Math.abs(a.reduce(function(x,y){return x*y;}) - b.reduce(function(x,y){return x*y;}))
};

  
// Alternative Method
function findDifference(a, b) {
    return Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2]);
};
