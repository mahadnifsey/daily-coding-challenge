// validate code with simple regex
function validateCode (code) {
    return /^[1-3]/.test(code);
};

// Alternative Method
validateCode = code => /^[123]/.test(code)