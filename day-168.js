// How many stairs will Suzuki climb in 20 years?
function stairsIn20(s){
    for (var i = 0, sum = 0; i<s.length ; i++) {
      for (var j = 0; j<s[i].length; j++) {
        sum += s[i][j];
      }
    }
    return sum*20;
};

// Alternative Method
stairsIn20 = s => 20 * s.reduce((prev1,curr1) => prev1 + curr1.reduce((prev2,curr2) => prev2 + curr2, 0), 0)

// Alternative Method 2
function stairsIn20(s){
    return s.reduce((a,b) => a.concat(b)).reduce((a,b) => a + b) * 20;
};