// Convert to Binary
function toBinary(n){
    var s = n.toString(2);
    var c = Number(s);
    return c;
};

// Alternative Method
function toBinary(n){
    let arr = []
     for (let i = n; i >= 1; i = Math.floor(i / 2)) {
       arr.push(i % 2 === 0 ? 0 : 1)
       }
   return Number(arr.reverse().join(''))
};

// Alternative Method 2
let toBinary = n => +n.toString(2)