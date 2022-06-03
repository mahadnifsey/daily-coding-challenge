// Beginner Series #4 Cockroach
// The cockroach is one of the fastest insects. 
// Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// km to cm = *100000 & 1hour = 3600 seconds. ∴ 100000/3600 = 1000/36 = 1/0.036
const cockroachSpeed = (s) => {
    return Math.floor(s*(1/0.036));
};

// Alternative Method
const cockroachSpeed = s => Math.floor(s / 0.036);