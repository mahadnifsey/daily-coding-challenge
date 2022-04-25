// A needle in the Haystack
// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so: 
function findNeedle(haystack) {
    var i = 0;
    while (i < haystack.length) {
      if (haystack[i] == 'needle') {
        return 'found the needle at position ' + i;
      }
      i++;  
    }
  }

  // Alternative method
  function findNeedle(haystack) {
    return "found the needle at position " + haystack.findIndex((s) => s == "needle");
}