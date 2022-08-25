// Find the Remainder
function remainder(a, b){
    // Divide the larger argument by the smaller argument and return the remainder
    if(b>a)
      return b%a;
    else
      return a%b;
};

// Alternative Method
function remainder(a, b){
    return a > b ? a % b : b % a;
};

// Alternative Method 2
function remainder(a, b){  
    return Math.max(a,b) % (Math.min(a,b) || NaN);
};