// Grasshopper - Grade Book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
function getGrade (s1, s2, s3) {
    // Code here
    const avg = (s1 + s2 + s3) / 3;
    
    if (avg >= 90) {
      return 'A';
    } else if (avg >= 80) {
      return 'B';
    } else if (avg >= 70) {
      return 'C';
    } else if (avg >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  }

// Alternative Method
function getGrade (s1, s2, s3) {
    const avg = (s1+s2+s3)/3;
    return [
      [90, 'A'],
      [80, 'B'],
      [70, 'C'],
      [60, 'D'],
      [00, 'F']
    ].find(grades => {
      return grades[0] <= avg
    })[1]
  }
   
// Alternative Method 2
const getGrade = (s1, s2, s3) =>
  (val => val < 60 ? `F` : val < 70 ? `D` : val < 80 ? `C` : val < 90 ? `B` : `A`)
  ((s1 + s2 + s3) / 3);