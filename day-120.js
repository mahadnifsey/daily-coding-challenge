// Holiday VIII - Duty Free
function dutyFree(normPrice, discount, hol){
    var discountAmount = normPrice * (discount / 100);
    var bottles = hol / discountAmount;
    return Math.floor(bottles);
};

// Alternative Method
  function dutyFree(normPrice, discount, hol){
    return Math.floor(hol/((normPrice*discount)/100));
};