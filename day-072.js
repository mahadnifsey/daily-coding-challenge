// L1:Set Alarm
// Write a function named setAlarm which receives two parameters. 
// The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
setAlarm = (empl, vac) => {
    if(employed === true && vacation === false) {
        return true ;
    } else {
        return false;
    }
};

// Alternative Method
const setAlarm = (empl, vac) => empl && !vac;