class Car {
    constructor(name) {
      this.name = name;
    }
    static hello1() {
        return "Hello There ";
      }
    static hello2(b) {
      return "Hello!! " + b.name;
    }
  }
  
  const myCar = new Car("Mustang");
  
  // You can call 'hello()' on the Car Class:
  console.log(Car.hello1());
  
  // But NOT on a Car Object:
  // console.log(myCar.hello());
  // this will raise an error.

  //except if it is passed as parameter
  console.log(Car.hello2(myCar));