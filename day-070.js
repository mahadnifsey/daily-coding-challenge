// Thinkful - Logic Drills: Traffic light
// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
// For example, when the input is green, output should be yellow.
function updateLight(current) {
    if(current === "green"){
      return "yellow"
    } else if (current === "yellow"){
      return "red"
    } else if (current === "red"){
      return "green"
    }  
  };

// Alternative Method
function updateLight(current) {
    switch (current) {
      case 'green':
        return 'yellow';
      case 'yellow':
        return 'red';
      default:
        return 'green';
    }
  }

// Alternative Method 2
const updateLight = current =>
  ({green: `yellow`, yellow: `red`, red: `green`})[current];

// Alternative Method 3
updateLight=(c,obj={green:'yellow',yellow:'red',red:'green'})=>obj[c]
