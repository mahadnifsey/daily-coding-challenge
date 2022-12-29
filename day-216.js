// Pythagorean Triple
function isPythagoreanTriple(integers) {
    const [a,b,c] = integers.sort((a,b) => a - b)
    return a**2 + b**2 === c**2
};

// Alternative Method
function isPythagoreanTriple(integers) {
    let massiv = integers.sort((a, b) => a - b)
    return (massiv[0] ** 2 + massiv[1] ** 2 == massiv[2] ** 2)
};

// Alternative Method 2
function isPythagoreanTriple(i) {
    var [a, b, c] = i.sort((a, b) => a - b)
    
    return (a*a + b*b) === c*c
};
