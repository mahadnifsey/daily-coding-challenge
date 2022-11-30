// Name on billboard
function billboard(name,price=30){
  var totalCost = 0;
  for(i=0; i<name.length; i++){
      totalCost += price;
  } 
  return totalCost;
};

// Alternative Method 
function billboard(name,price=30){
  return name.repeat(price).length;
} 

// Alternative Method 2
billboard = (name,price=30)=>[...new Array(name.length)].fill(price).reduce((prev,curr)=>prev+curr)