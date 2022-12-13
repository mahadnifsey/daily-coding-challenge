// Leonardo Dicaprio and Oscars
// You have to write a function that describe Leo.
function leo(oscar) {
    if(oscar === 86){
      return "Not even for Wolf of wallstreet?!";
    };
    if(oscar < 88){
      return "When will you give Leo an Oscar?";
    };
    if(oscar === 88){
      return "Leo finally won the oscar! Leo is happy";
    };
    return "Leo got one already!";
};

// Alternative Method 
function leo(oscar){
    switch (oscar){
      case 88:
        return "Leo finally won the oscar! Leo is happy";
        break;
      case 86:
        return  "Not even for Wolf of wallstreet?!";
        break;
      default:
        if(oscar<88) return "When will you give Leo an Oscar?";
        else return  "Leo got one already!";
    }
};

// Alternative Method 2
const leo = (oscar) => {
    return oscar === 88 ? 'Leo finally won the oscar! Leo is happy' :
           oscar === 86 ? 'Not even for Wolf of wallstreet?!'       :
           oscar  <  88 ? 'When will you give Leo an Oscar?'        :
           'Leo got one already!';
};