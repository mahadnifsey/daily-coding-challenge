// Bin to Decimal
// Complete the function which converts a binary number (given as a string) to a decimal number.
function binToDec(bin){
    return parseInt(bin,2);
};

// Alternative Method
function binToDec(bin){
    return bin.split('')
      .reverse()
        .map((x,i)=>x==1?Math.pow(2,i):0)
          .reduce((a,b)=>a+b,0);
};