// Contamination #1 -String-
// 
function contamination(text, char){
    return char.repeat(text.length)
};

// Alt Method
function contamination(text, char){
    return text.replace(/./g, char);
};

// Alt Method 2
const contamination = (s,v) => s.replace(/./g,v);