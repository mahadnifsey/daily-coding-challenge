// Is it even?
// In this Kata we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not). 
function testEven(n) {
    if(n% 2 == 0) {
      return true;
    } else {
      return false;
    }
  };

// Alternative Method
function testEven(n) {
    return n % 2 === 0 ? true : false;
  }