// Sum of Multiples
// Find the sum of all multiples of n below m.
function sumMul(n,m){
    if (n >= m) return "INVALID";

  let sum = 0;
    for (let i = n; i < m; i+=n) {
      sum += i;
    }
    return sum;
};

// Alternative Method
function sumMul(n,m){
    return m<=n ? "INVALID" : Math.floor(m/n)*(Math.floor(m/n)+1)*(n/2);
};