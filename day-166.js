// Simple validation of a username with regex - Delete Later
//Write a simple regex to validate a username. Allowed characters are:
// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).
function validateUsr(username) {
    const validator = /^[a-z0-9_]{4,16}$/;
    return validator.test(username);
};

// Alternative Method
function validateUsr(username) {
    return /^[0-9a-z_]{4,16}$/.test(username)
};

// Alternative Method 2
validateUsr = username => /^[a-z\d_]{4,16}$/.test(username)