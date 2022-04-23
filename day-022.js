// Abbreviate a Two Word Name
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

function abbrevName(name){
    var nam = name.split(' ');
    return nam[0].charAt(0).toUpperCase()+'.' + nam[1].charAt(0).toUpperCase();
  }

  // Alternative Solution
  const abbrevName = name => name.match(/\b\w/g).join('.').toUpperCase()