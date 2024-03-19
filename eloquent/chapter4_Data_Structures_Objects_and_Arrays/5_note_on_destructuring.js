/*
Destructuring

Let’s go back to the phi function for a moment.
*/

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2]));
    }

/*
One of the reasons this function is awkward to read is that we have a binding
pointing at our array, but we’d much prefer to have bindings for the elements
of the array, that is, 
let n00 = table[0] and so on. 

Fortunately, there is a succinct way to do this in JavaScript.
*/

function phi([n00, n01, n10, n11]) {
    return (n11 * n00 - n10 * n01) / 
        Math.sqrt((n10 + n11) * (n00 + n01) * (n01 + n11) * (n00 + n10));
}

/*
This also works for bindings created with let, var, or const. If you know the
value you are binding is an array, you can use square brackets to “look inside”
of the value, binding its contents.

A similar trick works for objects, using braces instead of square brackets.
*/

let {name} = {name: "Faraji", age: 23};
console.log(name);
// → Faraji

let {age} = {name: "Faraji", age: 23};
console.log(age);
// -> 23

/*
Note that if you try to destructure null or undefined, you get an error, 
much as you would if you directly try to access a property of those values.
*/



//  ============== //
// * Extra notes * //
//  ============== //


// Array destructuring
// ++++++++++++++++++++

const numbers = [1, 2, 3];

// Extract values from the array and assign them to variables
const [first, second, third] = numbers;

console.log("\nArray destructuring.")
console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(third);  // Output: 3


// Object destructuring
// ++++++++++++++++++++

const person = { firstName: 'John', age_: 30 };

// Extract properties from the object and assign them to variables
const { firstName, age_ } = person;

console.log("\nObject destructuring.")
console.log(firstName); // Output: John
console.log(age_);  // Output: 30


// Default value and Renaming
// ++++++++++++++++++++++++++
const student = { name_: 'John' };

// Provide a default value for age and rename the property age to studentAge
const { name_, age: studentAge = 25 } = student;

console.log("\nDefault value and Renaming.")
console.log(name_);       // Output: John
console.log(studentAge);  // Output: 25 (default value)


// Nested Destructuring
// +++++++++++++++++++++++++++
const data = {
    user: {
      firstName_: 'John',
      years: 30
    },
    scores: [10, 20, 30]
  };
  
  // Nested object and array destructuring
const { user: { firstName_, years }, scores: [firstScore, secondScore] } = data;

console.log("\nNested object and array destructuring.")
console.log(firstName_);        // Output: John
console.log(years);             // Output: 30
console.log(firstScore);        // Output: 10
console.log(secondScore);       // Output: 20
  