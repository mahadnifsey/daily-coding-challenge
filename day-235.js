// Quadratic Coefficients Solver
function quadratic(x1, x2){
    return [1, -(x2 + x1), (x1 * x2)]
};

// Alternative Method
const quadratic = (x1, x2) => [
    1,
    -x1 -x2,
    x1 * x2
]
// Alternative Method 2
let quadratic = (x1, x2) => [1, -(x1+x2), x1*x2];