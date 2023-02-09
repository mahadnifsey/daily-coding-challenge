// Collatz Conjecture (3n+1)
// The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that 
// applying the following algorithm to any number we will always eventually reach one:
var hotpo = function(n, acc = 0) {
    if (n <= 1) {
      return acc;
    } else {
      return hotpo(n%2==0 ? n/2 : 3*n+1, acc+1);
    }
};

// Alt Method
const hotpo = n => 
  n < 2 ? 0 : hotpo(n % 2 ? 3 * n + 1 : n / 2) + 1;

// Alt Method 2
var hotpo = n => n < 2 ? 0 : 1 + hotpo( n % 2 ? ( 3 * n + 1 ) : n / 2 );