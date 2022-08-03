// Name Shuffler
// Write a function that returns a string in which firstname is swapped with last name.
function nameShuffler(str){
    const fullName = str.split(" ");
    return [fullName[1], fullName[0]].join(" ");
};

// Alternative Method
function nameSuffle(str){
    return str.split(' ').reverse().join(' ')
};

// Alternative Method 2
const nameShuffler = str => str.split(' ').reverse().join(' ');