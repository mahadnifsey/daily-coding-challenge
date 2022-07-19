// Regular Ball Super Ball
var Ball = function(ballType) {
    this.ballType = ballType || 'regular';
  };

// Alternative Method 1
var Ball = function(ballType = "regular") {
    this.ballType = ballType;
  };
  