// Define a card suit
// You get any card as an argument. Your task is to return the suit of this card (in lowercase).
function defineSuit(card) {
    if(card.includes('♥')) return 'hearts'
    if(card.includes('♦')) return 'diamonds'
    if(card.includes('♣')) return 'clubs'
    if(card.includes('♠')) return 'spades' 
};

// Alternative Method
function defineSuit(card) {
    return {
      '♣' : 'clubs',
      '♦' : 'diamonds',
      '♥' : 'hearts',
      '♠' : 'spades'
    }[card.substr(-1)]
};


// Alternative Method 2
function defineSuit(card) {

    var suit = card.substr(-1);
    switch(suit){
       case '♣': return 'clubs';
       case '♦': return 'diamonds';
       case '♥': return 'hearts';
       default: return 'spades';
    }
 
};