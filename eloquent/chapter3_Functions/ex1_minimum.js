/*
Minimum
The previous chapter introduced the standard function Math.min that returns
its smallest argument. 
We can build something like that now. 
Write a function min that takes two arguments and returns their minimum.

*/

function min(arg1, arg2) {
    if (arg1 <= arg2) {
        return arg1;
    } else {
        return arg2;
    }
}

console.log(min(4, -4));
console.log(min(-4, -4));
console.log(min(34, 234));
console.log(min(4.5, 0.2));
