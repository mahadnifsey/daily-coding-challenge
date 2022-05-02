// Fake Binary
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
function fakeBin(x){
    var digi = '';
    for(var i = 0; i < x.length; i++){
      if(x[i] < '5')digi += '0';
      else if(x[i] >= '5')digi += '1';
    }
    return digi;
  }

// Alternative Method
function fakeBin(x){
  
    //Make a variable string for storing our final result
    result = ''
    
    //Loop through the given string
    for (elem of x) {
      
      //Use ternary Operator
      let bin = parseInt(elem) < 5 ? '0' : '1'
      
      //Add answer to result
      result += bin
    }
    return result
  }