// Grader
// Create a function that takes a number as an argument and returns a grade based on that number.
function grader(score) {
    if (score>1 | score<0.6) return 'F'
    if (score<0.7) return 'D'
    if (score<0.8) return 'C'
    if (score<0.9) return 'B'
    return 'A'
};

// Alternative Method
function grader(score) {
    if (score > 1 || score < 0.6) return 'F';
    else if (score >= 0.9) return 'A';
    else if (score >= 0.8) return 'B';
    else if (score >= 0.7) return 'C';
    else if (score >= 0.6) return 'D';
};

// Alternative Method 2
const grader = score =>
  score < 0.6 || score > 1 ? `F` : score < 0.7 ? `D` : score < 0.8 ? `C` : score < 0.9 ? `B` : `A`;