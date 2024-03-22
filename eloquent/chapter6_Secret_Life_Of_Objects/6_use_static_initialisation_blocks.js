// This example is from Mozilla.org
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype#adding_a_non-method_property_to_a_classs_prototype_property


class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  Dog.prototype.species = "dog";
  
  console.log(new Dog("Jack").species); // "dog"
  

/* 
This can be made more ergonomic using static initialisation blocks, 
which are called when the class is initialised. 
*/

class Dog {
    static {
        Dog.prototype.species = "dog";
    }
    
    constructor(name) {
        this.name = name;
    }
}

let dog = new Dog("Jack");
console.log(dog.species); 
// --> "dog"
