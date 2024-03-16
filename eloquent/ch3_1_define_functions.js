// with binding to a variable
const makeNoise = function() {
    console.log("Pling!");
};

makeNoise();

const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

console.log(power(2,3));

// with declaration notation
console.log("THe future says:", future());

function future() {
    return "\'Look out for flying cars\'";
}

// arrow notation
const powered = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};
/*
The arrow comes after the list of parameters and is followed by the function’s
body. 
It expresses something like 
“this input (the parameters) produces this result (the body)”.

When there is only one parameter name, you can omit the parentheses
around the parameter list. 
If the body is a single expression, rather than a block in braces, 
that expression will be returned from the function. 

So, these two definitions of square do the same thing:
*/
const square = (x) => { return x * x };
const square2 = x => x * x;
