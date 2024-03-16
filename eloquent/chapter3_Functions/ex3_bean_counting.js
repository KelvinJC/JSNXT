/*
You can get the Nth character, or letter, from a string by writing "string"[N].
The returned value will be a string containing only one character (for example, "b"). 

The first character has position 0, which causes the last one to be found at
position string.length - 1. 
In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument
and returns a number that indicates 
how many uppercase “B” characters there are in the string.

*/

function countBs(string) {
    let count = 0;
    for (i = 0; i < string.length - 1; i++) {
        if (string[i] == "B") {
            count += 1;
        }
    }
    return count;
}

// test countBs
console.log(`Number of B's in test string: ${countBs("Benjamin Butler")}`);
console.log(`Number of B's in test string: ${countBs("Bryan B. Bentworth")}`);
console.log(`Number of B's in test string: ${countBs("Carl Tucker")}`);


/*
Next, write a function called countChar that behaves like countBs,
except it takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters). 
Rewrite countBs to make use of this new function.

*/

function countChar(string, char) {
    let count = 0;
    for (i = 0; i < string.length - 1; i++) {
        if (string[i] == char) {
            count += 1;
        }
    }
    return count;
}

// test countChar
console.log(`\nCount of characters in test string: ${countChar("Benjamin Butler", 'B')}`);
console.log(`Count of characters in test string: ${countChar("Bryan B. Bentworth", 'r')}`);
console.log(`Count of characters in test string: ${countChar("Carl Tucker", 'c')}`);
