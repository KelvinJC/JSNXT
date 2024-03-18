/*
Array loops
In the tableFor function, there’s a loop like this:
*/

let journal = [
    {
        events: ["work", "touched tree", "pizza", "running", "television"],
        squirrel: false
    },
    {
        events: ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"],
        squirrel: false
    },
    {
        events: ["weekend", "cycling", "break", "peanuts", "beer"],
        squirrel: true
    },
];

for (let i = 0; i < journal.length; i++) {
    let entry = journal[i];
    // Do something with entry
}

/*
This kind of loop is common in classical JavaScript—going over arrays one
element at a time is something that comes up a lot, and to do that you’d run
a counter over the length of the array and pick out each element in turn.

There is a simpler way to write such loops in modern JavaScript.
*/

for (let entry of journal) { // in Python ----> for entry in journal:
    console.log(`${entry.events.length} events.`);
}
/*
When a for loop looks like this, with the word of after a variable definition,
it will loop over the elements of the value given after of. This works not only
for arrays but also for strings and some other data structures

*/