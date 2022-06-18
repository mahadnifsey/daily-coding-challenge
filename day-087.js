// Grasshopper - Check for factor
// This function should test if the factor is a factor of base.
// Return true if it is a factor or false if it is not.
function checkForFactor (base, factor) {
  let remainder = base % factor;
  if(remainder === 0){
    return true;
  } else {
    return false;
  }
};

// Alternative Method
function checkForFactor (base, factor) {
  return base % factor === 0;
}
