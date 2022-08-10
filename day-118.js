// Find Multiples of a Number
function findMultiples(integer, limit) {
    const arr = [];
    for (let i = 1; i <= limit; i += 1) {
        if (integer * i <= limit) {
          arr.push(integer * i);
        }
    }
    return arr;
};

// Alternative Method
function findMultiples(int,limit){
    var array = [];
    for (i=1; int*i <= limit; i++) {
      array[i-1] = int*i;
    }
    return array;
};