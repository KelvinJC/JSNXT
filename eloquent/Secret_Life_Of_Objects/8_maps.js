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
console.log("Is toString's age known?", "toString" in ages); // ages.hasOwnProperty("toString") to ignore derived properties of object prototype

/*
Here, the object’s property names are the people’s names, 
and the property values are their ages. 
But we certainly didn’t list anybody named toString in our map. 
Yet, because plain objects derive from Object.prototype, 
it looks like the property is there.

As such, using plain objects as maps is dangerous. 
There are several possible ways to avoid this problem. 

First, it is possible to create objects with no prototype. 
If you pass `null` to `Object.create`, the resulting object will not
derive from `Object.prototype` and can safely be used as a map.
*/

let protolessAges = Object.create(null);

protolessAges.Boris = 39
protolessAges.Liang = 22
protolessAges.Julia = 62
protolessAges.addAges = function() {return this.Boris + this.Julia + this.Liang;}

console.log(`Julia is ${protolessAges["Julia"]}`);
console.log("Is Jack's age known?", "Jack" in protolessAges);
console.log("Is Boris's age known?", "Boris" in protolessAges);
console.log("Is toString's age known?", "toString" in protolessAges); 
console.log(protolessAges.addAges());

