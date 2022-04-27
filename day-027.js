// Jenny's secret message
// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, 
// and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
// Can you help her?

function greet(name){
    return "Hello, " + name + "!";
    if(name === "Johnny")
      return "Hello, my love!";
  }


// Attempt #1
function greet(name) {
    if (name === "Johnny") {
    console.log("Hello, my love!");
  } else {
    console.log("Hello, " + name + "!");
  }
  }
  
  greet("Johnny");

// Attempt #2
function greet(name) {
    if (name === "Johnny") {
      return "Hello, my love!";
    }
    return "Hello, " + name + "!";
  }
  
  console.log(greet("Johnny"));