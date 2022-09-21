// String cleaning
function stringClean(s){
    return s.replace(/\d/g,'')
};

// Alternative Method
const stringClean = s => s.replace( /\d/g, "" );