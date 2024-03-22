

let empty = {};
console.log(empty.toString);
// --> [Function: toString]
console.log(empty.toString());
// --> [object Object]


/*
The prototype relations of JavaScript objects form a tree-shaped structure,
and at the root of this structure sits `Object.prototype`. 

It provides a few methods that show up in all objects, such as `toString`, which converts an
object to a string representation.

Many objects don't directly have `Object.prototype` as their prototype but
instead have another object that provides a different set of default properties.

e.g. Functions derive from `Function.prototype`, arrays derive from `Array.prototype`.

Such a prototype object will itself have a prototype, often Object.prototype,
so that it still indirectly provides methods like toString.
*/
console.log("\nPrototypes.")
console.log("The root prototype of all objects is Object.prototype:", Object.getPrototypeOf({}) == Object.prototype);
// -> true
console.log(Object.getPrototypeOf(Object.prototype));
// -> null

console.log("Functions have Function.prototype as their prototype:", Object.getPrototypeOf(Math.max) == Function.prototype);
// -> true

console.log("Arrays have Array.prototype as their prototype:", Object.getPrototypeOf([]) == Array.prototype);
// -> true

console.log("\nCreate objects from prototypes")
/* You can use `Object.create` to create an object with a specific prototype. */
let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};

let killerRabbit = Object.create(protoRabbit); // create killerRabbit object with protoRabbit as its prototype
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEEE!");