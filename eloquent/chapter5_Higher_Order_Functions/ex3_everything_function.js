/*
Everything
Analogous to the `some` method, arrays also have an `every` method. 

This one returns true when the given function returns true for every element in the array.
In a way, `some` is a version of the || operator that acts on arrays, and `every` is like the && operator.

Implement `every` as a function that takes an array and a predicate function
as parameters. 

Write two versions, one using a loop and one using the some method.
*/

function every(array, predicate) { /* implement the `every` method using a for/of loop */
    for (let member of array) {
        if (!predicate(member)) return false;
    }
    return true;
}

function every2(array, predicate) { /* implement the `every` method using the `some` array method */
    return !array.some((element) => !predicate(element));
}


console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true