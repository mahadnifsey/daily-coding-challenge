// Return the day
// Complete the function which returns the weekday according to the input number:
function whatday(num) {
    switch(num) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";  
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";  
        case 5:
            return "Thursday";
        case 6:
            return "Friday"; 
        case 7:
            return "Saturday";
        default:
            return "Wrong, please enter a number between 1 and 7";            
    }
};

// Alternative Method - (simplified swich case)
whatday = n => {
    switch (n) {
      case 1: return 'Sunday';
      case 2: return 'Monday';
      case 3: return 'Tuesday';
      case 4: return 'Wednesday';
      case 5: return 'Thursday';
      case 6: return 'Friday';
      case 7: return 'Saturday';
      default: return 'Wrong, please enter a number between 1 and 7';
    }
};

// Alternative Method 2 - (Object)
function whatday(num) { 
    let days = {
      1: 'Sunday',
      2: 'Monday',
      3: 'Tuesday',
      4: 'Wednesday',
      5: 'Thursday',
      6: 'Friday',
      7: 'Saturday'
    }
    return days[ num ] || 'Wrong, please enter a number between 1 and 7';
};