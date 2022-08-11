// Lario and Muigi Pipe Problem
function pipeFix(numbers){
	let arr = [];
	for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
		arr.push(i);
	}
	return arr;
};

// Alternative Method
function pipeFix(numbers){
    var first = numbers[0];
    var last = numbers[numbers.length-1];
    
    var arr = [];
    for(var i = first; i <= last; i++) {
      arr.push(i);
    }
    return arr;
};