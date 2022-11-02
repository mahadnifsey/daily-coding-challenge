// Fundementals: Return
// Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.
const add = (a,b)=> a + b;
const subt = (a,b)=> a - b;
const divide = (a,b)=> a / b;
const multiply = (a,b)=> a * b;
const mod = (a,b)=> a % b;
const exponent = (a,b)=> a ** b;

// Alternative Method
const [{pow: exponent}, {add, subtract: subt, multiply, divide, modulo: mod}] = [Math, require('ramda')] 
