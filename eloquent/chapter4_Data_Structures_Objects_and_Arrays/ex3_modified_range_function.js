/*
As a bonus assignment, modify your range function to take an optional third
argument that indicates the “step” value used when building the array. 

If no step is given, the elements go up by increments of one, corresponding to the
old behavior. 

The function call range(1, 10, 2) should return [1, 3, 5, 7,9]. 
Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/

function range(start, stop, step=1) {
    let array = [];
    if (step > 0) {
        for (; start <= stop; start += step) {
            array.push(start);
        }
        array.push(stop);
    } 
    else if (step < 0) {
        for (; start > stop; start += step) {
            array.push(start);
        }
        array.push(stop);
    }
    return array;
}

console.log(range(1, 10, 2));
console.log(range(5, 2, -1))
