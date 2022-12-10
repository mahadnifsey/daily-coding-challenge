// CSV representation of array
// Create a function that returns the CSV representation of a two-dimensional numeric array.
function toCsvText(array) {
  return array.join('\n');
};

// Alternative Method
function toCsvText(array) {
  return array.map(list => list.join(',')).join('\n')
};

// Alternative Method 2
toCsvText = a => a.join("\n");