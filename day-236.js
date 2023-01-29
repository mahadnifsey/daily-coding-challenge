// ASCII Total
function uniTotal(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
      count += str.charCodeAt(i);
    }
    return count;
};

// Alt Method  
function uniTotal (string) {
    return string.split('').reduce((prev,curr) => prev + curr.charCodeAt(), 0)
}

// Alt Method 2
function uniTotal(str){
    return str.split('').reduce(function(last,now){
      return last+now.charCodeAt();
    },0);
};