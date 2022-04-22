// Century From Year
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Task - Given a year, return the century it is in.

function century(year) {
  let xCentury = 100;
  let time = year/xCentury;

  if(year <= xCentury) {
    return 1;
  } else if(time > Math.round(time)) {
    return Math.round(time) + 1;
  } else if(year > xCentury) {
    return Math.round(time);
  }  
}
// Alternative Solution
function century(year) {
    return (year + 99) / 100 | 0;
}

// Super Short Answer
const century = year => Math.ceil(year/100)