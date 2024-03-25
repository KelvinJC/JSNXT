function wrapValue(n) {
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1);
console.log(wrap1);
let wrap2 = wrapValue(2);
console.log(wrap2);

console.log(wrap1());
console.log(wrap2());


function multiplier(factor) {
    return number => number * factor;
}

let multiply3 = multiplier(3);
console.log(multiply3);

console.log(multiply3(3));


function greaterThan(n) {
    return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11))