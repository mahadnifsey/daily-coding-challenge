// Filter out the geese
// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
function gooseFilter (birds) {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    return birds.filter((elm) => !geese.includes(elm))
};

// Alternative Method
const gooseFilter = birds =>
  (geese => birds.filter(val => !geese.includes(val)))
  ([`African`, `Roman Tufted`, `Toulouse`, `Pilgrim`, `Steinbacher`]);