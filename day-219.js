// "this" is a problem 
// We want to create a constructor function 'NameMe', which takes first name and last name
// as parameters. The function combines the first and last names and saves the value in "name" property.
function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = first+ ' ' + last;
};

// Alternative Method
function NameMe(first, last) {
    return { 
      firstName : first,
      lastName : last,
      name: first + ' ' + last
   }
};