// Is it a number?
function isDigit(s) {
    return s.trim() === '' ? false : !isNaN(s.trim());
};

// Alternative Method
// parseFloat - Ignores whitespace and only focuses on the numbers eg; 4534nfsdf - it will only focus on 4534.
function isDigit(s) {
    return s==parseFloat(s);
};

// Alternative Method 2
const isDigit = s => /^-?\d+(\.\d+)?$/.test(s);