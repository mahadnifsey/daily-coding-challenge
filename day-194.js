// No Loops 2 - You only need one
// You will be given an array a and a value x. 
// All you need to do is check whether the provided array contains the value, without using a loop.
function check(a,b){
  return a.includes(b);
};

// Alternative Method
const check = (a,x) => a.includes(x);

// Alternative Method 2
check=(a,x)=>a.includes(x)