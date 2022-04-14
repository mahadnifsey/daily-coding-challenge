// Square(n) Sum
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
function squareSum(numbers) {
    let sum = 0
    for( let i = 0; i < numbers.length; i++) {
        sum += numbers[i] **2
    }
    return sum
}

//Alternative Solution 1
function squareSum(numbers) {
    const multiply = number => number * number
    const reducer = (acc, cur) => acc + cur
    return Array.from(numbers, multiply).reduce(reducer, 0)
}

// Alternative Solution 2
function squareSum(numbers) {
    return numbers.reduce( (acc, cur) => acc + (cur **2), 0)
}

