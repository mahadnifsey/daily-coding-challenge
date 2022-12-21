// Is there a vowel in there?
function isVow(a){
    for (var i=0, l=a.length; i<l; ++i)
    {
      var char = String.fromCharCode(a[i])
      if ('aeiou'.indexOf(char) !== -1)
      a[i] = char;
    }
    
    return a;
};

// Alternative Method
const isVow = a =>{
    let map = {
      97: 'a',
      101: 'e',
      105: 'i',
      111: 'o',
      117: 'u',
    }
    return a.map( num => map[num] ? map[num] : num);
};

// Alternative Method 2
function isVow(a){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return a.map(code => vowels.includes(String.fromCharCode(code)) ? String.fromCharCode(code) : code )
};

// Alternative Method 3
function isVow(a){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return a.map(code => vowels.includes(String.fromCharCode(code)) ? String.fromCharCode(code) : code )
};