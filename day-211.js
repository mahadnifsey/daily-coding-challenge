// For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre
var quote = function(fighter) {
    switch(fighter.toLowerCase()) {
        case 'conor mcgregor': return "I'd like to take this chance to apologize.. To absolutely NOBODY!";
        case 'george saint pierre' : return "I am not impressed by your performance.";
        default : 'Who are you?'
    }
};

// Alternative Method
var quote = function(fighter) {
    return fighter.toLowerCase() === "george saint pierre" ? "I am not impressed by your performance." : "I'd like to take this chance to apologize.. To absolutely NOBODY!";
};

// Alternative Method 2
const quote = fighter => fighter.toLowerCase() === 'conor mcgregor' ? "I'd like to take this chance to apologize.. To absolutely NOBODY!" : "I am not impressed by your performance."