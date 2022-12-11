// Training JS #6: Basic data types--Boolean and conditional statements if..else
function trueOrFalse(val){
  return Boolean(val).toString();
};

// Alternative Method
function trueOrFalse(val){
  if (val) return true;             
  return false;
};

// Alternative Method 2
trueOrFalse = val => val ? 'true' : 'false';