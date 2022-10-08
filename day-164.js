// Holiday VI - Shark Pontoon
const shark = (pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) => {
    let youTime = pontoonDistance / youSpeed
    let sharkTime = sharkDistance / (dolphin ? sharkSpeed / 2 : sharkSpeed)
    
    return sharkTime < youTime ? 'Shark Bait!' : 'Alive!'
};

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    return sharkDistance/(dolphin?sharkSpeed/2:sharkSpeed) > pontoonDistance/youSpeed ? "Alive!":"Shark Bait!";
};