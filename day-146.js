// Sleigh Authentication
function Sleigh() {}
Sleigh.prototype.authenticate = function(name, password) {
    return name == 'Santa Claus' && password == "Ho Ho Ho!";
};

// Alternative Method
class Sleigh {
    authenticate(name, password) {
        return name == "Santa Claus" && password == "Ho Ho Ho!";
    }
};