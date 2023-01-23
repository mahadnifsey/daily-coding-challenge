// NBA full 48 minutes average
unction pointsPer48(ppg, mpg) {
    return +(ppg/mpg*48).toFixed(1)||0
};

// Alt Method
const pointsPer48 = (ppg, mpg) => mpg ? +(ppg*48/mpg).toFixed(1) : 0;

// Alt Method 2
function pointsPer48(ppg, mpg) {
    var num = (48/mpg) * ppg
    return +num.toFixed(1) || 0
};