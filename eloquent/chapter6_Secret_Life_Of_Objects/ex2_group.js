/*
Groups
The standard JavaScript environment provides another data structure called
Set. 
Like an instance of Map, a set holds a collection of values. 
Unlike Map, it does not associate other values with those — it just tracks which values are part
of the set. 

A value can be part of a set only once—adding it again doesn’t have any effect.

Write a class called Group (since Set is already taken). 
Like Set, it has `add`, `delete`, and `has` methods. 

Its constructor creates an empty group, 
`add` adds a value to the group (but only if it isn’t already a member), 
`delete` removes its argument from the group (if it was a member), and 
`has` returns a Boolean value indicating whether its argument is a member of the group.

Use the === operator, or something equivalent such as indexOf, 
to determine whether two values are the same.

Give the class a static `from` method that takes an iterable object as argument
and creates a group that contains all the values produced by iterating over it.
*/

class Group {
    constructor() {
        this.group = [];
    }

    // add(value) {
    //     for (let member of this.group) {
    //         if (member === value) return `${value} already a member`;
    //     }
    //     this.group.push(value);
    // }

    add(value) {
        if (!this.has(value)) {
            this.group.push(value);
        }
    }

    delete(value) {
        for (let i = 0; i < this.group.length ; ++i) {
            if (this.group[i] === value) this.group.splice(i)
        }
    }

    has(value) {
        return this.group.includes(value);
    }

    static from(collection) {
        let group = new Group();
        for (let member of collection) {
            group.add(member);
        }
        return group;
    }
}


let arr = [1, 3, 3 ,5, 54, 6];
let gg = Group.from(arr);

console.log(gg);
gg.delete(6)
console.log(gg);
gg.add(77)
console.log(gg);
