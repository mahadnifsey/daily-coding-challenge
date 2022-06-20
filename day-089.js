// Student's Final Grade
// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.
function finalGrade (exam, projects) {
    if(exam > 90 || projects > 10){
      return 100;
    } else if(exam > 75 && projects >= 5) {
      return 90;
    } else if(exam > 50 && projects >= 2){
      return 75;
    } else {
      return 0;
    }
};

// Alternative Method
function finalGrade (exam, projects) {
    if(exam > 90 || projects > 10) return 100;
    if(exam > 75 & projects >= 5) return 90;
    if(exam > 50 & projects >= 2) return 75;
    return 0;
  }