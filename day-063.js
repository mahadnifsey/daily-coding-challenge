// Quarter of the year
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
const quarterOf = (month) => {
    switch (true) {
    case (month <= 3): return 1; break;
    case (month <= 6): return 2; break;
    case (month <= 9): return 3; break;
    case (month <= 12): return 4; break;
    }
  };

// Alternative Method
const quarterOf = (month) => {
    return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4;
};

// Alternative Method 2
const quarterOf = m => Math.ceil(m/3);

// Alternative Method 3
quarterOf=(m)=>Math.ceil(m/3)