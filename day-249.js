// Find the Slope
function slope(points) {
var y = points[3] - points[1];
var x = points[2] - points[0];
if (x==0){return String(undefined);}
return String(y/x);
};

// Alt Method
function slope(points){
    let [a,b,c,d] = points;
   return c-a === 0 ? "undefined" : ((d-b)/(c-a))+''
};

// Alt Method
function slope([ x1, y1, x2, y2 ]) {
    let slope = (y2 - y1) / (x2 - x1);
    return Number.isFinite(slope) ? `${slope}` : 'undefined';
};