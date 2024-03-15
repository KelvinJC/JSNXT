/*
Chessboard
Write a program that creates a string that represents an 8×8 grid, 
using newline characters to separate lines. 
At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

When you have a program that generates this pattern, 
define a binding size = 8 and change the program
so that it works for any size, 
outputting a grid of the given width and height.

*/

for (var string = "",  gap_first = true, n = 0; string.length < 72; ) {
    if (string.length == 8) { // add first newline character
        string += '\n';
        gap_first = !gap_first;
        n += 1; 
    }
    else if (string.length % 9 != 0 && (string.length - n) % 8 == 0) { // add subsequent newline characters
        string += '\n';
        gap_first = !gap_first;
        n += 1; 
    }
    else { // fill grid 
        if (gap_first == true) {
            string += "_";
            string += "#";
        }
        else {
            string += "#";
            string += "_";
        }
    }
}

console.log(string);


/*
// ================================================================ //
// ===   Optimisation to make program dynamic                   === //
// ===   change the program so that it works for any size,      === //
// ===   outputting a grid of the given width and height.       === //
// ================================================================ //

// NOTE
// this code works for square chessboards i.e width == height
// so only one parameter `size` is needed.

let size = 16  // change to any integer to change the chessboard size
for (var string = "",  gap_first = true, n = 0; string.length < ((size + 1) * size); ) {
    if (string.length == size) {
        string += '\n';
        gap_first = !gap_first;
        n += 1; 
    }
    else if (string.length % (size + 1) != 0 && (string.length - n) % size == 0) {
        string += '\n';
        gap_first = !gap_first;
        n += 1; 
    }
    else {
        if (gap_first == true) {
            string += "_";
            string += "#";
        }
        else {
            string += "#";
            string += "_";
        }
    }
}

console.log(string);

*/



/* 
// ================================================= //
// =====   Optimisation to recieve input    ======   //
// ================================================= //

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for input
rl.question("Enter a number: ", function(input) {
  // Parse the input as a number
  const number = parseInt(input);

  // Check if the input is a valid number
  if (!isNaN(number)) {
    // Use the input in your program
    print_chessboard(number);
  } else {
    console.log("Invalid input. Please enter a number.");
  }

  // Close the readline interface
  rl.close();
});


function print_chessboard(size) {
    for (var string = "",  gap_first = true, n = 0; string.length < ((size + 1) * size); ) {
        if (string.length == size) {
            string += '\n';
            gap_first = !gap_first;
            n += 1; 
        }
        else if (string.length % (size + 1) != 0 && (string.length - n) % size == 0) {
            string += '\n';
            gap_first = !gap_first;
            n += 1; 
        }
        else {
            if (gap_first == true) {
                string += "_";
                string += "#";
            }
            else {
                string += "#";
                string += "_";
            }
        }
    }
    
    console.log(string);    
}
// ================================================= //

*/




/*
   // My first attempt;
   // Works but prints the chessboard after a newline 

for (var string = "", gap_next = true; string.length < 72; ) {
    if (string.length % 9 != 0) {
        if (gap_next == false) {
            string += "_";
            string += "#";
        }
        else {
            string += "#";
            string += "_";
        }
    }
    else {
        string += "\n";
        gap_next = !gap_next;
    }
}

console.log(string);
*/