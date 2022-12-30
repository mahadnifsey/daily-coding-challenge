// Parse float
function parseF(s) {
    const f = parseFloat(s)
    return isNaN(f) ? null : f
};

// Alternative Method
function parseF(s) {
    return isNaN(parseFloat(s)) ? null : parseFloat(s);
};