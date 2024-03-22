/*
A map (noun) is a data structure that associates values (the keys) with other
values. 
For example, you might want to map names to ages. 
It is possible to use objects for this:
*/

let ages = {
    Boris: 39,
    Liang: 22,
    Julia: 62
}

console.log(`Julia is ${ages["Julia"]}`);
// -> Julia is 62
console.log("Is Jack's age known?", "Jack" in ages);
console.log("Is Boris's age known?", "Boris" in ages);
console.log("Is toString's age known?", "toString" in ages);