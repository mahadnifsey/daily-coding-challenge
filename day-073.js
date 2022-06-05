// Double Char
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
function doubleChar(str) {
    // Empty String where we will house the string and the repeat.
    let doubleStr = '';
    for (let i = 0; i < str.length; i++){
        // Here we add to our variable the first string and the repeat
      doubleStr += str[i] + str[i];
    }
    return doubleStr;
  };

  // Alternative Method
  const doubleChar = (str) => str.split("").map(c => c + c).join("");

  // Alternative Method 2
  function doubleChar(str) {
    return str.replace(/./g, '$&$&');
  }