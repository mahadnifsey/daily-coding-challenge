// USD => CNY
// Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . 
// The input is the amount of USD as an integer, and the output should be a string that states 
// the amount of Yuan followed by 'Chinese Yuan'
function usdcny(usd) {
    return `${(usd * 6.75).toFixed(2)} Chinese Yuan`
};

// Alternative Method
function usdcny(usd) {
    let con = usd * 6.75
    return `${con.toFixed(2)} Chinese Yuan`
};

// Alternative Method 2
const usdcny = usd => `${(usd*6.75).toFixed(2)} Chinese Yuan`;

// Alternative Method 3
usdcny = $ => `${($ * 6.75).toFixed(2)} Chinese Yuan`;