// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.
const rps = (p1, p2) => {
    // If there is a draw.
    if(p1 === p2){
      return 'Draw!';
      // Player 1 win scenarios
    } else if (p1 === 'rock' && p2 === 'scissors'){
      return 'Player 1 won!';
    } else if (p1 === 'scissors' && p2 === 'paper'){
      return 'Player 1 won!';
    } else if (p1 === 'paper' && p2 === 'rock'){
      return 'Player 1 won!';
    } else {
      // Player 2 win scenarios.
      return 'Player 2 won!';
    }
  };
  

  // Alternative Method
  const rps = (p1, p2) =>
  p1 === p2 ? `Draw!` : `Player ${/ps|rp|sr/.test(p1[0] + p2[0]) + 1} won!`;