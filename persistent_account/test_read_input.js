
import promptSync from 'prompt-sync';


let firstName, lastName, bankVerificationNumber;

const prompt = promptSync();

const fn = prompt("Enter first name: ");
const ln = prompt("Enter last name: ");
const bvn = prompt("Enter BVN: ");

console.log(firstName);

// // run in browser
// import { createInterface } from 'readline';

// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let firstName, lastName;

// // Prompt the user for input
// rl.question("Enter first name: ", function(input) {
//     firstName = input;

//     // Close the readline interface
//     rl.close();
// });

// rl.question("Enter last name: ", function(input) {
//     lastName = input;
//     // Close the readline interface
//     rl.close();
// });

