// Thinkful - Number Drills: Blue and red marbles
let guessBlue = (blueStart, redStart, bluePulled, redPulled) => {
    return (blueStart-bluePulled) / (blueStart + redStart - bluePulled - redPulled);
};

// Alternative Method
guessBlue = (blueStart, redStart, bluePulled, redPulled) => (blueStart-bluePulled) / (blueStart + redStart - bluePulled - redPulled)