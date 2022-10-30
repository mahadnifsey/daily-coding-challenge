// Regex count lowercase letters
// Your task is simply to count the total number of lowercase letters in a string.
function lowercaseCount(str){
    return (str.match(/[a-z]/g) || []).length
};

// Alternative Method
const lowercaseCount = str => (str.match(/[a-z]/g) || []).length