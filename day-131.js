// How many lightsabers do you own?
// Write the function that, accepts the name of a programmer, and returns the numnber of lightsavers owned by that person.
function howManyLightsabersDoYouOwn(name) {
    if(name === "Zach"){
      return 18;
    } else {
      return 0;
    }
};

// Alternative Method
function howManyLightsabersDoYouOwn(name) {
    return name === 'Zach' ? 18 : 0;
  }