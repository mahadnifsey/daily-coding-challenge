// Multiplication table for number
// Your goal is to return multiplication table for number that is always an integer from 1 to 10.
function multiTable(number) {
    let table = "";

    for(let i =1; i <=10; i++) {
        let ans = i * number;
        table += `${i} * ${number} = ${ans}\n`;
    }

    return table.trim("\n");
};

// Alternative Method
multiTable=n=>[...Array(10)].map((_,i)=>(i++,i+' * '+n+' = '+(i*n))).join("\n");