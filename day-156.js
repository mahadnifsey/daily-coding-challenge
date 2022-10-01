// Remove First and Last Character Part Two
// Write a function which returns a new string containing 
// the same character sequences except the first and the last ones but this time separated by spaces.
function array(arr){
    return arr.split(",").slice(1,-1).join(" ") || null;
};

// Alternative Method
const array = str => {
    var arr = str.split(",");
    return arr.length > 2 ? arr.slice(1,-1).join(" ") : null;
};

// Alternative Method 2
array = arr => arr.split(',').slice(1,-1).join(' ') || null