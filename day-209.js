// Classy Classes
class Person {

    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    get info() {
      return `${this.name}s age is ${this.age}`;
    }
    
};

// Alternative Method
class Person {
    constructor(name, age) {
      this.info = name + 's age is ' + age;
    }
};

// Alternative Method 2
class Person {
    constructor(name,age) {
        this.info = `${name}s age is ${age}`
    }
};