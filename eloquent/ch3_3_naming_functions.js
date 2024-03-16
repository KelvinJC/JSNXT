/*
We want to write a program that prints two numbers: 
the numbers of cows and chickens on a farm, 
with the words Cows and Chickens after them and zeros
padded before both numbers so that they are always three digits long.

E.g.
007 Cows
011 Chickens

*/

function printFarmCount(chickens, cows, pigs) {
    console.log(`${zeroPad(chickens)} Chickens`);    
    console.log(`${zeroPad(cows)} Cows`);    
    console.log(`${zeroPad(pigs)} Pigs`);   
}

function zeroPad(num) {
    if (num < 10) {
        return(`00${num}`);
    } else if (num < 99) {
        return(`0${num}`);
    } else {
        return(`${num}`);
    }    
}

printFarmCount(23, 5, 10);