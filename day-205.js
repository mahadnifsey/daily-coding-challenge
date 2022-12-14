// Are arrow functions odd?
// Time to test your basic knowledge in functions! Return the odds from a list:
function odds(values){
    // arrow it
    return values.filter(number => {
      return number % 2;
    });
};

// Alternative Method
function odds(values){
    return values.filter( v => v%2 );
};

// Alternative Method 2
const odds = values => values.filter(n => n & 1);``