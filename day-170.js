// Color Ghost
// Create a class Ghost
// Ghost objects are instantiated without any arguments.
// Ghost objects are given a random color attribute of "white"
//  or "yellow" or "purple" or "red" when instantiated
var Ghost = function() {
    this.color = ['white', 'yellow', 'red', 'purple'][Math.floor(Math.random() *4)]
};

// Alternative Method
var Ghost = function() {
    var colors = ["white", "yellow", "purple", "red"];
    var colorIndex = Math.floor(Math.random() * (colors.length));
    this.color = colors[colorIndex];
};