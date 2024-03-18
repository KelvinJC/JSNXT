/*
Reversing an array.
Arrays have a reverse method that changes the array 
by inverting the order in which its elements appear. 

For this exercise, write two functions, `reverseArray` and `reverseArrayInPlace`. 

The first, reverseArray, takes an array as argument
and produces a new array that has the same elements in the inverse order. 

*/

function reverseArray(inArray) { /* returns new array that has the same elements as inArray but in the inverse order */
    let array = [];
    for (let i = inArray.length - 1; i >=0; i--) {
        array.push(inArray[i]);
    }
    return array;
}

console.log(reverseArray([1, 2,3,4,5,6,7,8]))

/*
The second, `reverseArrayInPlace`, does what the reverse method does: 
it modifies the array given as argument by reversing its elements.  
Neither may use the standard reverse method.

*/

function reverseArrayInPlace(arr) { /* reverse array arr in place*/
    let start = 0;
    let stop = arr.length - 1;
    for (let temp; start <= stop; start++, stop--) {
        temp = arr[start];
        arr[start] = arr[stop];
        arr[stop] = temp;
    }
}

let testArray = [23, 34, 2, 4, 5, 6, 7]
console.log("before reversal", testArray) 
reverseArrayInPlace(testArray);
console.log("after reversal", testArray) 

/*
Thinking back to the notes about side effects and pure functions in the
previous chapter, which variant do you expect to be useful in more situations?

Which one runs faster?
*/