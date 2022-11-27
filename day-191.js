// Grasshopper - Combine strings
function combineNames(first, last) {
    return first + " " + last;
};

// Alternative Method - Arrow Function
combineNames = (a, b) => {
    return a + " " + b;
};

// Alternative Method 2
combineNames = (first,last) => `${first} ${last}`