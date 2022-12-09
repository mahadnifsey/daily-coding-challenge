// Tip Calculator
// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service. 
function calculateTip(amount, rating) {
  switch(rating.toLowerCase()){
    case "terrible":return 0;
    case "poor":return Math.ceil(amount * 0.05);
    case "good":return Math.ceil(amount * 0.1);
    case "great":return Math.ceil(amount * 0.15);
    case "excellent":return Math.ceil(amount * 0.2);
    default:return "Rating not recognised";
  }
};

// Alternative Method
const TIPS = {
  "terrible": 0.0,
  "poor": 0.05,
  "good": 0.1,
  "great": 0.15,
  "excellent": 0.2
};

const calculateTip = (amount, rating) =>{
  rating = rating.toLowerCase();

  return rating in TIPS ? Math.ceil(TIPS[rating]*amount): "Rating not recognised";
};