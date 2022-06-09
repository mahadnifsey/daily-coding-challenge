// Twice as old
// Your function takes two arguments:
// 1 current father's age (years)
// 2 current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
function twiceAsOld(dadYearsOld, sonYearsOld) {
    // Use Math.abs to return only absolute value, and then check either how many years ago or left.
    return(Math.abs((sonYearsOld  * 2) - dadYearsOld));
};

// Alternative Method
const twiceAsOld = (d, s) => Math.abs(d - 2 * s);

// Alternative Method 2
const twiceAsOld=(d,s)=>Math.abs(d-s-s)