// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
function replace(s){
    return s.replace(/[aeoiu]/ig, '!')  
};

// Alternative Method
const replace = s => s.replace(/[aeiou]/gi, '!');