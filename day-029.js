// Beginner Series #2 Clock
// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.
function past(h, m, s){
    let secondsToMillisec = s * 1000;
    let minutesToMillisec = m * 60000;
    let hoursToMillisec = h * 3600000;
  
    return secondsToMillisec + minutesToMillisec + hoursToMillisec;
  }

// Alternative Method
function past(h, m, s){
    return ((h*3600)+(m*60)+s)*1000;
  }

  // Alternative Method 2
  const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);