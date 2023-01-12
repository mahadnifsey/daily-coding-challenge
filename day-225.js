// Geometry Basics: Distance between points in 2D
function distanceBetweenPoints(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
};

// Alternative Method
function distanceBetweenPoints(a, b) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
};

// Altenative Method 2
distanceBetweenPoints = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

// Alternative Method 3
const distanceBetweenPoints = (a, b) => Math.hypot(a.x-b.x, a.y-b.y);