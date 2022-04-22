// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
function digitize(n) {
    const answer =[]
    const str = n.toString()
  
    for(item of str){
      answer.unshift(parseInt(item))
    }
  
    return answer
  }
  
  // Alternative Method
  function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }