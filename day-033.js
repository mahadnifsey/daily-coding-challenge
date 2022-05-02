//Is he gonna Survive
function hero(bullets, dragons) {
    if (bullets >= (dragons * 2)) {
      return true;
    } else {
      return false;
    }
  }


// Alternative Method
function hero(bullets, dragons){
    return bullets >= dragons * 2
  }