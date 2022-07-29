// What's the real floor?
// Write a function that given a floor in the american system returns the floor in the european system.
const getRealFloor = n => {
    if(n >= 13) return n - 2
    if(n > 0) return n - 1
    return n
};
// Alternative Method
function getRealFloor(n) {
    return n > 13 ? n - 2 : n > 0 ? n - 1 : n
};