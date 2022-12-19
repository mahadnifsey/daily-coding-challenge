// Fix your code before the garden dies!
function rainAmount(mm){
    if ( mm < 40) {
         return "You need to give your plant " + (40 - mm) + "mm of water"
    } else {
         return "Your plant has had more than enough water for today!"
    }
};

// Alternative Method
function rainAmount(mm) {
    if (mm < 40)
        return "You need to give your plant " + (40 - mm) + "mm of water"
        return "Your plant has had more than enough water for today!"
};

// Alternative Method 2
function rainAmount(mm){
    return mm < 40 ? `You need to give your plant ${40 - mm}mm of water` : "Your plant has had more than enough water for today!"
};
