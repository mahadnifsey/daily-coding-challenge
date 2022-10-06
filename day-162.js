// Find the position
function position(letter){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
};

// Alternative Method
function position(letter) {
    return `Position of alphabet: ${letter.charCodeAt(0) -96}`
};