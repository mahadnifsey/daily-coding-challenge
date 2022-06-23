// Correct the mistakes of the character recognition software
// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
function correct(string){
    // organize the corrections in a human-readable object/map
    const corrections = {
      "5": "S",
      "0": "O",
      "1": "I",
    };
  
    return (
      string
        // split the string into an array of characters
        .split("")
        // check if the current character is in the corrections object
        // if it is, correct it, else return it unchanged
        .map((char) =>
          corrections.hasOwnProperty(char) ? corrections[char] : char
        )
        // join the array of characters to a string
        .join("")
    );
  };

// Alternative Method
const corrections = {
    '5': 'S',
    '0': 'O',
    '1': 'I',
  };
  
  const correct = string => (
    string.replace(/[501]/g, character => corrections[character])
  );

// Alternative Method 2
function correct(string) {
    return string.replace(/0/g, "O")
                 .replace(/5/g, "S")
                 .replace(/1/g, "I");
}

// Alternative Method 3
correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')

