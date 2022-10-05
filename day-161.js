// How old will i be in 2099?
function  calculateAge(birthDate, otherDate) {

    var age = otherDate - birthDate;
    
      if(age === 1) {
      return 'You are ' + age + ' year old.';
        } else if(age > 1) {
          return 'You are ' + age + ' years old.';
        } else if (age < -1) {
          return 'You will be born in ' +  Math.abs(age) + ' years.';
        } else if (age === -1) {
          return 'You will be born in ' + Math.abs(age) + ' year.';
        } else {
          return 'You were born this very year!';
        }
};

// Alternative Method
function  calculateAge(a,b) {
    return a>b?`You will be born in ${a-b} year${a-b==1?"":"s"}.`:
           a<b?`You are ${b-a} year${b-a==1?"":"s"} old.`:
           `You were born this very year!`
};