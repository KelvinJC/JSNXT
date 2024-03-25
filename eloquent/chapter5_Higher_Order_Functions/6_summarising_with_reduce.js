import scriptList from "./scripts.js";

function reduce(array, combine, start) { /* simplified version of reduce method */
    let current;

    if (start) {
        current = start;
        
        for (let member of array) {
            current = combine(current, member);
        }
    } else if (!start && array.length > 0) { /* where `start` arg is not provided, array must contain a minimum of one element */
        current = array[0];
        
        for (let i = 1; i < array.length; i++ ) {
            current = combine(current, array[i])
        }
    }

    return current;
}

let arr = [1,2,3,4,5,6,7,8,9,10];
console.log("sum of Array `arr`", reduce(arr, (a, b) => a + b, ));


// find script with most characters
let scr = scriptList.filter(s => s.name == 'Han')

const sumRanges = (currentSum, [from, to]) => {
    let diff = to - from; 
    currentSum += diff;
    return currentSum;
}

console.log(`Count of characters in ${scr[0].name} script`, scr[0].ranges.reduce(sumRanges, 0));

function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to -  from);
    }, 0);
}

let maxCharScript = scriptList.reduce((a, b) => {
    return characterCount(a) > characterCount(b) ? a : b;
});

console.log(maxCharScript);