// Grasshopper - Terminal game move function
function move(position, roll) {
    return position + (roll * 2)
};

// Alternative Method
const move = (position, roll) => position + roll * 2