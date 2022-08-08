// Vowel remover
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
function shortcut(str) {
    return str.split('').filter(function(e) {
      return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1 
    }).join('')
};

// Alternative Method
function shortcut (string) {
    return string.split(/[aeiou]/g).join('')
};

// Alternative Method 2
const shortcut = string => string.replace( /[euioa]/g, '' );