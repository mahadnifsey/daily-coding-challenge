// Add Length
// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
function addLength(str){
    return str.split(' ').map(function(v){return v+' '+v.length})
};

// Alt Method - GPT
function addLength(str) {
    return str.split(" ").map(word => `${word} ${word.length}`);
};

// Alt Method 2
function addLength(str) {
    var split = str.split(" ");
    var result = [];
     
    for (i = 0; i < split.length; ++i) {
      result.push(split[i] + " " + split[i].length);
    } 
    return result;  
};