// Calculate BMI
function bmi(weight, height) {
    var formula = (weight / Math.pow(height, 2));
    switch (true) {
      case formula <=18.5:
      return 'Underweight';
      case formula <=25.0:
      return 'Normal';
      case formula <=30:
      return 'Overweight';
      default:
      return 'Obese';
      
    }
  }

  // Alternative Method
  function bmi(weight, height) {
    let bmi = weight / (height**2);
    
    if(bmi < 18.5){
      return "Underweight";
    }else if (bmi < 25){
      return "Normal";
    }else if (bmi < 30){
      return "Overweight";
    }else{
      return "Obese";
    }
  }