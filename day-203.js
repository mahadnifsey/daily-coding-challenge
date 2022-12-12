// Compare within margin
// Create a function close_compare that accepts 3 parameters: a, b, and an optional margin.
// The function should return whether a is lower than, close to, or higher than b. 
function closeCompare(a, b, m = 0){
    return Math.abs(a - b) <= m? 0: Math.sign(a - b);
};

// Alternative Method
function closeCompare(a, b, margin = 0) {
    if (a < b - margin) return -1;
    if (a - margin > b) return 1;
    return 0;
};

// Alternative Method 2
closeCompare = (a, b, margin) => Math.abs(a-b) <= margin ? 0 : Math.sign(a - b);