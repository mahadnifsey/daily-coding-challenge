// Filling an array (part 1)
// Write a function that produces an array with the numbers 0 to N-1 in it.
const arr = N => {
    const arr = [];
    
    for(let i = 0; i < N; i+=1) {
      arr.push(i);
    }
    
    return arr;
};

// Alternative Method
const arr = n => Array.from({length: n}, (_, i) => i);