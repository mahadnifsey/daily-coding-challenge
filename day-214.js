// Price of Mangoes
function mango(quantity, price){
    return price * (quantity - Math.floor(quantity / 3));
};

// Alternative Method
mango = (quantity, price) => price * (quantity - Math.floor(quantity /3))

// Alternative Method 2
const mango = (quantity, price) => Math.ceil(quantity / 1.5)*price;