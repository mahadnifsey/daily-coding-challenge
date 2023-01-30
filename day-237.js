// Multiply the number
function multiply(number) {
    return number * (5 ** String(Math.abs(number)).length);
};

// Alt Method
function multiply(number){
    //your code here
    let numStr = number.toString().replace("-", "");
    return number* Math.pow(5,numStr.length)
};

// Alt Method 2
multiply=number=>number * 5 ** String(Math.abs(number)).length
