// Daily Coding Answer
function strCount(str, letter){  
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] == letter)
        count++;
    }
    return count; 
  };

// Alternative Method
function strCount(str, letter){  
    return str.split(letter).length-1
  };