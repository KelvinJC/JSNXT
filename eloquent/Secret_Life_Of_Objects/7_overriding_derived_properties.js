/*
When you add a property to an object, whether it is present in the prototype 
or not, the property is added to the object itself.

If there was already a property with the same name in the prototype, 
that property will no longer affect the object
as it is now hidden behind the object's own property.
*/

class Rabbit {
    constructor(type) {
        this.type = type;
    }

    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");


Rabbit.prototype.teeth = "small";
console.log("killerRabbit teeth are -", killerRabbit.teeth);

killerRabbit.teeth = "long, sharp and bloody";
console.log("killerRabbit teeth (after object property update) are -", killerRabbit.teeth);

console.log("blacksRabbit teeth are -", blackRabbit.teeth);
console.log("Rabbit prototype teeth are -", Rabbit.prototype.teeth);