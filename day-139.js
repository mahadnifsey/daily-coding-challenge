// Exclamation marks series #1: Remove an exclamation mark from the end of string
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
function remove(s){
    if(s[s.length-1] == '!'){
    return s.split('').slice(0,s.split('').length-1).join('');
    } else {
    return s;
      }
};

// Alternative Method
function remove(s) {
    return s.endsWith('!') ? s.slice(0, -1) : s;
};