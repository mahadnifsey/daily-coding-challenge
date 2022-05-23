// Grasshopper - Personalized Message
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
function greet (name, owner) {
    return name == owner ? 'Hello boss' : 'Hello guest';
  }

// Alternative Method
const greet = (name, owner) => name == owner? 'Hello boss': 'Hello guest';