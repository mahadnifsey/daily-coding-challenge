// Basic subclasses - Adam and Eve
class God{
    /**
     * @returns Human[]
     */
      static create(){
        return [new Man, new Woman];
      }
};
    class Human{}
    class Man extends Human{}
    class Woman extends Human{}

// Alternative Method
class Human{}
class Man{}
class Woman{}

Object.setPrototypeOf(Man.prototype, Human.prototype);
Object.setPrototypeOf(Woman.prototype, Human.prototype);
class God {
  static create() {
    // write code here

    return [new Man(), new Woman()];
  }
};