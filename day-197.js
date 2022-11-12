/* Reversed Strings */
/* Complete the solution so that it reverses the string passed into it.  */
function solution(str){
    let reverseString = "";
  
  for (let character of str) {
      reverseString = character + reverseString;
  }
  
  return reverseString
  }

  /* Other method */ 
  function solution(str){
    return str.split('').reverse().join('');  
  }