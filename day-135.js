// Training JS #7: if.else and ternary operator
// In JavaScript, if..else is the most basic condition statement, 
// it consists of three parts:condition, statement1, statement2, like this:
const saleHotdogs = (n) => {
    switch (true) {
      case n < 5: return n * 100;
      case n < 10: return n * 95;
      default: return n * 90;
    }
};

// Alternative Method
saleHotdogs = n => n * (n < 5 ? 100 : n < 10 ? 95 : 90);

// Alternative Method 2
function saleHotdogs(n){
    return n<5 ? n*100 : n<10 ? n*95 : n*90;
};
