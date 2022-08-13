// The Wide-Mouthed frog! 
// Your goal in this kata is to create complete the mouth_size method this method takes one
// argument animal which corresponds to the animal encountered by the frog. If this one is an
// alligator (case-insensitive) return small otherwise return wide.
function mouthSize(animal) {
    if(animal=== 'alligator' || animal === 'ALLIGATOR'){
    return 'small'}
    else{return 'wide'}
};
// Alternative Method
function mouthSize(animal) {
    return animal.toLowerCase() == 'alligator' ? 'small' : 'wide';
};