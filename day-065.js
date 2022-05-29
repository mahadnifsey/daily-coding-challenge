// Remove exclamation marks
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
function removeExclamationMarks(s) {
    var arr =s.split("");
    arr = arr.filter(function(e){
          return e !== "!";
      })
      return arr.join("");
  }

// Alternative Method
const removeExclamationMarks = (s) => {
    return s.split('').filter((letter) => letter !== '!').join('')
  }

// Alternative method 2
function removeExclamationMarks(s) {
    let res = '';
    for (let i = 0; i < s.length; i++){
      if(s[i] !== '!'){ res += s[i];}
    }
    return res;
  }