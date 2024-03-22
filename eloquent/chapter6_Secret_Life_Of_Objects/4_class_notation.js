/*
So JavaScript classes are constructor functions with a prototype property. 
That is how they work, and until 2015, that was how you had to write them. 
These days, we have a less awkward notation.
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