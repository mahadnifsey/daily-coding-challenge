// Will there be enough space?
// He wants you to write a simple program telling him if he will be able to fit all the passengers.
function enough(cap, on, wait) {
    if((on + wait) < cap){
        return 0;
    } else {
        return ((on + wait)-cap);
    }
};

// Alternative Method
function enough(cap, on, wait) {
    return Math.max(wait + on - cap, 0)
}