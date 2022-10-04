// Kata Example Twist
// This is an easy twist to the example kata 
// (provided by Codewars when learning how to create your own kata). 
const websites=Array(1000).fill({
    node_modules: Array(1000000).fill('jquery'),
    toString: () => 'codewars'
});

// Alternative Method
const websites = Array(1000).fill('codewars')