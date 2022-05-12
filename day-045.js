// Simple multiplication
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
function simpleMultiplication(n){
    return n % 2 ? n * 9 : n * 8;
}

// Alternative Method
const simpleMultiplication=n=>n*(n%2?9:8)