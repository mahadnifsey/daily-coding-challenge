// Gravity Flip
// Given the initial configuration of the cubes in the box, 
// find out how many cubes are in each of the n columns after Bob switches the gravity.
const flip = (d, a)=>{
    if (d === 'R') {
        return a.sort((a, b) => a -b);
    }

    return a.sort((a, b) => b -a);
};

// Alternative Method
const flip = (d, a) =>
  a.sort((a, b) => d === `R` ? a - b : b - a);

// Alternative method 2
const flip = (d, a) => d === 'L' ? a.sort((x, y) => y-x) : a.sort((x,y)=> x-y)