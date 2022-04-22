// Remove First and Last Character.
// Your goal is to create a function that removes the first and last characters of a string. 
const removeChar = (str) => {
    return str.slice(1, str.length - 1)
  };

  // Alternative Solution
function removeChar(str) {
  return str.slice(1, -1);
}