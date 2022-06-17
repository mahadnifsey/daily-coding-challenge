// Is the string uppercase?
// Create a method to see whether the string is ALL CAPS.

String.prototype.isUpperCase = function(){
  if(this.toString() == this.toUpperCase()){
    return true;
  } else{
    return false;
  }
}

// Alternative Method
String.prototype.isUpperCase = function() {
  return this.toString() === this.toUpperCase()
}
