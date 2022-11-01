// Object Oriented Piracy
function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
}

Ship.prototype.isWorthIt = function(){
    return this.draft-(this.crew*1.5) > 20;
};

// Alternative Method
function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt = function(){return this.draft-(this.crew*1.5)>20}
};