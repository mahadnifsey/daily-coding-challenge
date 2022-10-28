// Find Nearest square number
// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.
function nearestSq(n){
    return Math.pow(Math.round(Math.sqrt(n)), 2);
};

// Alternative Method
const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);