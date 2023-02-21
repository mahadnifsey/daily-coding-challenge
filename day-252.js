// Freudian translator
function toFreud(string) {
    return string.replace(/\S+/g, 'sex');
};

// Alt Method
const toFreud = str => str === '' ? '' : str.split(' ').map(e => 'sex').join(' ')

// Alt Method 2
function toFreud(string) {
    return string.replace(/\S+/g, 'sex');
};