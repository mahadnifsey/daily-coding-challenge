// Do you speak "English"?
// Return value as boolean values, true for the string to contains "English", false for it does not.
function spEng(sentence){
    let sentenceLower = sentence.toLowerCase();
    return sentenceLower.includes('english');
};

// Alternative Method
function spEng(sentence){
    return sentence.toLowerCase().includes("english");
};

// Alternative Method 2
spEng = sentence => /english/i.test(sentence)