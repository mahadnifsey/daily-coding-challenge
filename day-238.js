// UEFA EURO 2016
function uefaEuro2016(teams, scores) {
    if (scores[0] > scores[1]) {
        return "At match " + teams[0] + " - " + teams[1] + ", " + teams[0] + " won!";
    } else if (scores[0] < scores[1]) {
        return "At match " + teams[0] + " - " + teams[1] + ", " + teams[1] + " won!";
    } else {
        return "At match " + teams[0] + " - " + teams[1] + ", teams played draw.";
    }
};

console.log(uefaEuro2016(['Germany', 'Ukraine'], [2, 0])); 

// Alt Method
function uefaEuro2016([t1,t2], [s1,s2]){
    return `At match ${t1} - ${t2}, `+(s1!=s2?`${s1>s2?t1:t2} won!`:`teams played draw.`)
};