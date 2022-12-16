// Training JS #10: loop statement --for
function pickIt (arr) {
  
    let odd = []
    let even =[]
        
    for (var x of arr) {
        ((x % 2) ? odd : even).push(x)    
    }
        
    return [odd, even]
};

// Alternative Method
pickIt = arr => {
    let odd = [], even = [];
    for (let num of arr) num & 1 ? odd.push(num) : even.push(num);
    return [odd,even];
};
