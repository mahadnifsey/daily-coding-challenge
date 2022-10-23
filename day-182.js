// Exclamation marks series #2: Remove all exclamation marks from the end of sentence
// Remove all exclamation marks from the end of sentence.
function remove(s){
    while (s[s.length - 1] === '!') {
      s = s.slice(0, -1);
    }
    return s;
};

// Alternative Method
function remove (string) {
    return string.replace(/!+$/, '')
};

// Alternative Method2
const remove = s => s.replace(/!+$/, '');