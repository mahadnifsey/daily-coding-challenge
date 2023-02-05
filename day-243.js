// Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, 
// you can assume that the input data is always a non empty string, no need to verify it.
function remove(s){
    return s.replace(/!/g, '').concat('!');
};

// Alt Method
const remove = s => s.replace(/!+/g, "")+"!";

// Alt Method 2
function remove(s) {
    return s.replace(/!+/g, '') + '!';
};