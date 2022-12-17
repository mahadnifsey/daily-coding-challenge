// Simple calculator
function calculator(a,b,sign){
    if ((typeof a === "number") && (typeof b === "number")) {
        switch (sign) {
            case "+" :return a + b;
            case "-" :return a - b;
            case "*" :return a * b;
            case "/" :return a / b;
        }
    }
    return "unknown value";
};

// Alternative Method
function calculator(a,b,sign){
    switch(sign)
    {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;
    default: return "unknown value";
    }
};

// Alternative Method 2
const calculator = (a,b,sign) => !isNaN(a)&&!isNaN(b)&&['+','-','*','/','%'].includes(sign) ? eval(a+sign+b) : "unknown value"