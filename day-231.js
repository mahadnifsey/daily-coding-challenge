// Online RPG: player to qualifying stage?
function playerRankUp (points){
    return points < 100 ? false : "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.";
};

// Alt Method
function playerRankUp (points) {
    return points >= 100 ? "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up." : false;
};

// Alt Method 2
function playerRankUp (points) {
    var winStr = "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up."
    return (points > 99) ? winStr : false;
};