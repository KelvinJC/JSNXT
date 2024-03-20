/*
Write a function deepEqual that takes two values and returns true only if they
are the same value or are objects with the same properties, 
where the values of the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) 
or have their properties compared, you can use the typeof operator.

If it produces "object" for both values, you should do a deep comparison.

But you have to take one silly exception into account: 
because of a historical accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the properties
of objects to compare them.
*/

// first attempt!!

// function deepEqual(val1, val2) {
//     if ((val1 || val2) && (val1 === null || val2 === null)) { // at leaast one value is null
//         return false;
//     } 
    
//     else if (typeof val1 === "object" && typeof val2 === "object") { // both values are objects
//         for (let key in val1) { // iterate through the keys of an object
//             if (val1.hasOwnProperty(key) && val2.hasOwnProperty(key)) {
//                 if (val1[key] !== val2[key]) {
//                     return false;
//                 }
//             } else {
//                 return false; // One object has a property that the other does not have
//             }
//         }
//         return true;
//     }
    
    
//     else if (typeof val1 == "object" || typeof val2 == "object") { // one value is an object
//         return false;
//     } 
//     else { // both values are not objects
//         if (val1 === val2) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }

const user1 = {name: "John", age: 34};
const user2 = {name: "John", age: 34};
const user3 = {name: "Mary", age: 23};
const user4 = {name: "Ralph", age: 34};


// console.log(deepEqual(1, 2)) // ==> false 
// console.log(deepEqual(2, 2)) // ==> true
// console.log(deepEqual(null, 2)) // ==> false
// console.log(deepEqual(null, null)) // ==> true
// console.log(deepEqual(user1, 2)) // ==> false
// console.log(deepEqual(user2, user3)) // ==> false
// console.log(deepEqual(user1, user2)) // ==> true
// console.log(deepEqual(user2, user4)) // ==> false


// Eloquent Javascript Code
function deepEqual(object1, object2) { /* deep compare two objects by comparing their value or properties */
    if (object1 === object2) {
        return true;
    }
    if (object1 == null || 
        object2 == null || 
        typeof object1 != "object" || 
        typeof object2 != "object"
        ) {
        return false;
    }

    let keysObject1 = Object.keys(object1), keysObject2 = Object.keys(object2);

    if (keysObject1.length != keysObject2.length) {
        return false;
    }

    for (let key of keysObject1) {
        if (!keysObject2.includes(key) || !deepEqual(object1[key], object2[key])) {
            return false;
        }
    }

    return true;
}

  let obj = {here: {is: "an"}, object: 2};
  console.log(deepEqual(obj, obj));
  // → true
  console.log(deepEqual(obj, {here: 1, object: 2}));
  // → false
  console.log(deepEqual(obj, {here: {is: "an"}, object: 2} ));
  // → true