// No zeros for heros
function noBoringZeros(n) {
    while (n % 10 === 0 && n !== 0) {
      n = n / 10
    }
    return n
};

// Alternative Method
function noBoringZeros(n) {
    return Number(n.toString(). replace(/0+$/, ''));
};