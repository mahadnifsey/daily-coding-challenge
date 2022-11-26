// A Strange Trip to the Market
//FIND THE LOCH NESS MONSTER. SAVE YOUR TREE FIDDY
function isLockNessMonster(s) {
    return /tree fiddy|3.50|three fifty/.test(s)
};

// Alternative Method
const isLockNessMonster = (s) => /tree fiddy|three fifty|3.50/.test(s);