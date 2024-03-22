/*
Class declarations currently allow only methods—properties that hold functions —
to be added to the prototype. 

This can be somewhat inconvenient when you want to save a non-function value in there. 
The next version of the language will probably improve this. 

For now, you can create such properties by 
directly manipulating the prototype after you’ve defined the class.
*/
 
class Person {
    //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // methods
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }
}

Person.prototype.gender = "Male";

// create an instance of Person
let person = new Person("John", 30);

// access the properties and method
console.log(person.name);
console.log(person.age);
console.log(person.gender);
person.greet();





