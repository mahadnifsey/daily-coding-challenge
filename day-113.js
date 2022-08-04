// A wolf in sheep's clothing
function warnTheSheep(queue) {
    const wolfIndex = queue.indexOf('wolf');
    if (wolfIndex === queue.length -1){
        return "Pls go away and stop eating my sheep";
    }
    const sheepIndex = queue.length - wolfIndex - 1;
    return `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`;
};

// Alternative Method
function warnTheSheep(queue) {
    const position = queue.reverse().indexOf('wolf');
    return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
};

// Alternative Method 2
const warnTheSheep = a => (a = a.length - a.indexOf('wolf') - 1) ?
  `Oi! Sheep number ${a}! You are about to be eaten by a wolf!`:
  'Pls go away and stop eating my sheep';