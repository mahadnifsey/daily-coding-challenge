// What is between?
function between(a, b) {
  // your code here
  arr = []
  for(i = a;i <= b; i++){ 
      arr.push(i)
  }
  return arr
};

// Alternative Method
function between(a, b) {
  var all = [];
  for(a;a<=b;a++){
    all.push(a);
  }
  return all;
};

// Alternative Method 2
function between(a,b){
  return Array.from(new Array(b-a +1), x => a++)
};
