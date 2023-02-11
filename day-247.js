// Find the Integral
const integrate = (coefficient, exponent) => {
    return coefficient / (exponent + 1) + 'x^' + (exponent + 1);
};

// Alt Method
function integrate(coeff, exp) {
    return (coeff / (++exp)) + 'x^' + exp;
};

// Alt Method 2
const integrate = (coefficient, exponent) => `${coefficient / ++exponent}x^${exponent}`;