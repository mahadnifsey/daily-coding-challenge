// Find the smallest integer in the array.
// Given an array of integers your solution should find the smallest integer. 
class SmallestIntegerFinder {
    findSmallestInt(args) {
    var temp  ;
   
      for (var i=0;i<args.length;i++){
          if(args[i]<=args[0]){
              args[0]  = args[i];    
              temp = args[i];
          }
        }
      return temp;
    }
  }

  // Alternative solution
  class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }