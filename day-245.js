// Training JS #5: Basic data types--Object
function animal({name, legs, color}) {
    return `This ${color} ${name} has ${legs} legs.`;
};

// Alt Method
function animal(obj){
    let {color,name,legs} = obj;
    return `This ${color} ${name} has ${legs} legs.`
};
// Alt Method 2
const animal = (obj) => `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;