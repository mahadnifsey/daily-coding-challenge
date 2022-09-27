// Pre-FizzBuzz Workout #1
function preFizz(n) {
    let output = new Array();
    let num = 1;
    while(output.length  < n){
      output.push(num);
      num += 1;
    }
    return output;
};

// Alternative Method 2
function preFizz(n) {
    var arr = [];
    for(var i = 1; i < n + 1; i++){
      arr.push(i);
    }
    return arr;
};

// Alternative Method 3
preFizz = n => new Array( n ).fill().map( (val, index) => index + 1 );

// Alternative Method 4
const preFizz = n => Array.from({length: n}, (_, i) => i + 1)