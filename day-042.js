// Are You Playing Banjo?
//Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:
function areYouPlayingBanjo(name) {
    let permitted = "r";
    if (name.startsWith(permitted)) {
        return name + " plays banjo" 
    } else {
        return name + " does not play banjo"
    }
  }

console.log(areYouPlayingBanjo("Ringo"));

// alternative Method
function areYouPlayingBanjo(name) {
    if (name.toLowerCase().charAt(0) == 'r'){
      name = name + ' plays banjo';
    }else{
      name = name + ' does not play banjo';
    }
    return name;
  }

  console.log(areYouPlayingBanjo("Ringo"));