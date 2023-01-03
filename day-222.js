// Take an Arrow to the knee, Functionally
var ArrowFunc = function(arr) {
    return arr.map( x => String.fromCharCode(x) ).join(''); 
};

// Alternative Method
const ArrowFunc = (arr) => String.fromCharCode(...arr);

// Alternative Method 2
var ArrowFunc = arr => String.fromCharCode.apply(String, arr);