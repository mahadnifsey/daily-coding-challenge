// Barking Mad
// Use method prototypes to enable all Dogs to bark. 
function Dog (breed) {
    this.breed = breed;
  }
  
  var snoopy = new Dog("Beagle");
  
  Dog.prototype.bark = function() {
    return "Woof";
  };
  
  var scoobydoo = new Dog("Great Dane");
  

// Alt Method
function Dog (breed) {
    this.breed = breed;
  }
  
  var snoopy = new Dog("Beagle");
  
  snoopy.bark = function() {
    return "Woof";
  };
  
  var scoobydoo = new Dog("Great Dane");
  
  scoobydoo.bark = function() {
    return "Woof";
};