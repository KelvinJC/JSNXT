/*
Functions that operate on other functions, either by taking them as arguments
or by returning them, are called higher-order functions. 

Higher-order functions allow us to abstract over actions, not just values.
They come in several forms. 
*/

// Functions that create new functions.

function greaterThan(n) {
    return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// -> true

// Functions that change other functions
function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, "returned", result);
        return result;
    };
}

noisy(Math.min)(3, 2, 1);

// Functions that provide new type of control flow
function unless(test, then) {
    if (!test) then();
}

function repeat(times, body) {
    for (var i = 0; i < times; i++) {
        body(i);
    };
}

repeat(3, n => {
    unless(n % 2 == 1, () => {
        console.log(n, "is even");
    });
});