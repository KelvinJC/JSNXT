/*
Write a sum function that takes an array of numbers and returns the
sum of these numbers. 

Run the example program and see whether it does indeed return 55. 
i.e console.log(sum(range(1, 10)));
*/


function sum(numbers) {
    num = 0
    for (let number of numbers) {
        num += number;
    }
    return num;
}

function range(start, end) { /* helper function to supply range of numbers */
    let rangeArray = [];
    for (; start <= end; start++) {
        rangeArray.push(start);
    }
    return rangeArray;
}

console.log(sum(range(1, 10)));
