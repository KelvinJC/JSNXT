/*
There is a built-in array method, `forEach`, 
that provides something like a for/of loop as a higher-order function.
*/

["A", "B"].forEach(l => console.log(l));
// → A
// → B

[22, 44, 4, 8, 83, 52, 64, 6].forEach((l) => {
    if (l % 2 == 0) {
        console.log(`${l} is even`);
    }
    else {
        console.log(`${l} is odd`);
    }
});