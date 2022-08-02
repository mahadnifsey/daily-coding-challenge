// Hello, Name or World!
// Define a method hello that returns "Hello, Name!" to a given name,
// or says Hello, World! if name is not given (or passed as an empty String).
function hello(name) {
    if (typeof name === "undefined" || name.length === 0) {
      return `Hello, World!`;
    } else {
      return `Hello, ${name[0].toUpperCase()}${name.substring(1,).toLowerCase()}!`;
    }
};

// Alternative Method
function hello(name){
    if (name){
      return "Hello, " + name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase() + '!';
    } else {
      return "Hello, World!";
    }
};

// Alternative Method 2
const hello = s =>
  `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;