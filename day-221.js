// Who is going to pay for the wall?
// Your code will show Full name of the neighbor and the truncated version of the name as an array.
// If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is"
function whoIsPaying(name){
    return (name.length>2)?([name, name.substr(0,2)]):[name];
};

// Alternative Method
const whoIsPaying = name =>
  name.length <= 2 ? [name] : [name, name.substr(0, 2)]

// Alternative Method 2
const whoIsPaying = name => name.length > 2 ? [name, name.slice(0, 2)] : [name]  