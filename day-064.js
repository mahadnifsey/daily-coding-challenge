// Sum Mixed Array
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
function sumMix(x) {
    // use the .isArray method to return 0
    if (Array.isArray(x)) {
        var sum = 0;
        // Then use the .forEach to execute once for each element
        x.forEach(function (element) {

                sum += Number (element);
        });
    };
    return sum;
};

// Alternative Method 1
function sumMix(x){
    return x.reduce((x, y) => Number(x) + Number(y), 0);
};

// Alternative Method 2
const sumMix=x=>x.reduce((a,b)=>+b+a,0)