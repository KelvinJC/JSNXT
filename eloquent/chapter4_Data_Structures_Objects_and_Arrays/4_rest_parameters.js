/*

*/

function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) {
            result = number;
        }
    }
    return result;
}

console.log(max(4, 1, 9, -2));

/*
When such a function is called, the rest parameter is bound to an array
containing all further arguments. 

If there are other parameters before it, their values aren’t part of that array. 
When, as in max, it is the only parameter, it will hold all arguments.

You can use a similar three-dot notation to call a function with an array of
arguments.
*/
let numbers = [5, 2, 7];
console.log(max(...numbers));

/*
This “spreads” out the array into the function call, 
passing its elements as separate arguments. 

It is possible to include an array like that along with other
arguments, as in max(9, ...numbers, 2).
*/

let primes = [3, 5, 7, 23];
max_prime = max(231, 77103, ...primes, 3453);
console.log(max_prime);
// --> 77103

/*
Square bracket array notation similarly allows the triple-dot operator to
spread another array into the new array.

*/

let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);
// --> [ 'will', 'never', 'fully', 'understand' ]