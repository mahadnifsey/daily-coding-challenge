// Exclusive "or" (xor) Logical Operator
function xor(a, b) {
    if(a == true && b == false) {
      return true;
    } else if(a == false && b == true) {
      return true;
    } else {
      return false;
    }
};

// Alternative Method
function xor(a, b) {
    return a != b;
};