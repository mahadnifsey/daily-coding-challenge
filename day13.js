// Remove String Spaces
// Simple, remove the spaces from the string, then return the resultant spring.
function noSpace(x) {
    let newStr = ''
    for(let i = 0; i < x.length; i++) {
        if(x[i] !== " "){
            newStr += x[i]
        }
    }
    return newStr
}

// Alternative Solutions
function noSpace(x){
    return x.replace(/\s/g, '');
}