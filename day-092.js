// I love you, a little , a lot, passionately ... not at all
// Your goal in this kata is to determine which phrase the girls would say for a flower of a 
// given number of petals, where nb_petals > 0.
function howMuchILoveYou(nbPetals) {
    // your code
  const arr = [
     "I love you",
     "a little",
     "a lot",
     "passionately",
     "madly",
     "not at all",
   ];
  
  for (let i = 0; i <= nbPetals-1; i += 1) {
    
    if (i === nbPetals-1) {
      return arr[i%6];
    }
  }
};

// Alternative Method
const howMuchILoveYou=n=>['not at all','I love you','a little','a lot','passionately','madly'][n%6]

// Alternative Method 2
function howMuchILoveYou(nbPetals) {
    let petals = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    return petals[(nbPetals-1) % 6];
  };
