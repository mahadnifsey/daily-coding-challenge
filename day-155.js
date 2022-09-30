// Reversing Words in a String
// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.
function reverse(string){
    return string.split(' ').reverse().join(' ');
};

// Alternative Method
function reverse(string){
    return string.trim().split(/ +/).reverse().join(' ');
};

// Alternative Method 2
reverse = string => string.split(' ').reverse().join(' ')