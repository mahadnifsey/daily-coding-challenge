// Is it a palindrome?
// Write a function that checks if a given string (case insensitive) is a palindrome.
function isPalindrome(x) {
    return x.toLowerCase() == x.toLowerCase().split('').reverse().join('')
};

// Alternative Method
const isPalindrome = x => x.toLowerCase().split('').reverse().join('') == x.toLowerCase();