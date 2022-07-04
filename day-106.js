// Sort and Star
function twoSort(s) {
    var last = s.sort()[0];
    var a = last[0];
    for(var i = 1; i < last.length; i++) {
      a += "***" + last[i];
    }
    return a;
  };

// Alternative Method
function twoSort(s) {
    return s.sort()[0].split('').join('***');
  };