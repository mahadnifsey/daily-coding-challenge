// The 'if' function
function _if(bool, func1, func2) {
    bool ? func1() : func2()
};

// Alternative Method
_if = (bool, func1, func2) => (bool ? func1 : func2)();