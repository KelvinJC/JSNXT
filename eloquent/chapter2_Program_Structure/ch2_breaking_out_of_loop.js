/* 
Having the looping condition produce false is not the only way a loop can finish.
There is a special statement called break 
that has the effect of immediately jumping out of the enclosing loop.
This program illustrates the break statement. 
It finds the first number that is both greater than or equal to 20 and divisible by 7.
*/

for (let current = 20; ; ++current) {
    if (current % 7 == 0) {
        console.log(current);
        break;
    }
}