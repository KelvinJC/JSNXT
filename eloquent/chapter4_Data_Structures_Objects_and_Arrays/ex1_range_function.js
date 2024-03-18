/*
Write a range function that takes two arguments, `start` and `end`, and returns
an array containing all the numbers from start up to (and including) end.
*/

function range(start, end) {
    let rangeArray = [];
    for (; start <= end; start++) {
        rangeArray.push(start);
    }
    return rangeArray;
}

console.log(range(4, 25));
