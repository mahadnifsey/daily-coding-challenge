// Palindrome Strings
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward.
// This includes capital letters, punctuation, and word dividers.
// Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first. 
function isPalindrome(line) {
    line = line.toString();
    
    for (var left = 0, right = line.length - 1; left < right;) {
      if (line.charAt(left++) !== line.charAt(right--)) {
        return false;
      }
    }  
    return true;
};

// Alternative Method
function isPalindrome(line) {
    return (String(line) == String(line).split('').reverse().join('') )
};

// Alternative Method 2
isPalindrome = line => String(line) == String(line).split('').reverse().join('')

