// Ensure Question
function ensureQuestion(s) {
    return s.endsWith("?") ? s : s.concat("?");
};

// Alt Method
function ensureQuestion(s) {
    return s.split('?').join('').concat('?')
};

// Alt Method 2
const ensureQuestion = s => s.endsWith('?') ? s : s+'?'