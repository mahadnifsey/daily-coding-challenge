// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method such as
// to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; 
// see the initial solution for details) such that each lowercase letter becomes uppercase 
// and each uppercase letter becomes lowercase. 
String.prototype.toAlternatingCase = function () {
    new_str = "";
        for(var i = 0; i < this.length; i++) {
            if(this[i] === this[i].toUpperCase()) {
            new_str += this[i].toLowerCase();
            }
            else {
            new_str += this[i].toUpperCase();
            }
        }
    return new_str;
}
// Alternative Method
String.prototype.toAlternatingCase = function () {
    return this.split("").map(l => l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()).join("");
  }