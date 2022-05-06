// Opposites Attract
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
  }

// Alternative Method
function lovefunc(flower1, flower2){
    return (flower1 + flower2) % 2 == 1;
  }