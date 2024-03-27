/*
Flattening

Use the reduce method in combination with the concat method to “flatten”
an array of arrays into a single array that has all the elements of the original arrays.
*/

let array = [ [ 994, 1008 ], [ 11392, 11508 ], [ 11513, 11520 ] ];

function flatten(arr) {
    return arr.reduce((a, b) => { return a.concat(b); })
}

console.log(flatten(array));