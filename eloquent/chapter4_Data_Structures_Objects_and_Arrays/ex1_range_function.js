/*
Write a range function that takes two arguments, `start` and `end`, and returns
an array containing all the numbers from start up to (and including) end.
*/

function range(start, end) {
    let array = [];
    for (; start <= end; start++) {
        array.push(start);
    }
    return array;
}

console.log(range(4, 25));
