// Check same case
// Write a function that will check if two given characters are the same case.
function sameCase(a, b){
    if (a.toLowerCase() === a.toUpperCase() || b.toLowerCase() === b.toUpperCase()) {
      return -1;
    }
    return (a.toLowerCase() === a) === (b.toLowerCase() === b) ? 1 : 0;
};

// Alternative Method
function sameCase(a, b){
    if (/[a-zA-Z]/.test(a) === false || /[a-zA-Z]/.test(b) === false) return -1;
    if (a === a.toUpperCase() && b !== b.toUpperCase()) return 0;
    if (a !== a.toUpperCase() && b === b.toUpperCase()) return 0;
    return 1;
};

// Alternative Method 2
sameCase = (a,b) => /[a-z]/i.test(a) && /[a-z]/i.test(b) ? Number(/[a-z]/.test(a) == /[a-z]/.test(b)) :-1