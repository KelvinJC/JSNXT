import scriptList from "./scripts.js";

function filter(array, test) { /* return a list of elements which yield true when passed into test function */
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}

let arrayDefinedFilter = filter(scriptList, script => script.living);
console.log(arrayDefinedFilter);

// use standard array method `filter` 
let arrayStandardFilter = scriptList.filter(script => script.living);
console.log(arrayStandardFilter);

console.log("Both filter functions are equivalent: ", compare(arrayDefinedFilter, arrayStandardFilter));


// define function to compare the two arrays from each filter function
function compare(array1, array2) { /* helper function to verify that two arrays contain the same set of elements */
    if (array1.length != array2.length) return false;

    for (let member of array1) {
        if (!array2.includes(member)) return false;
    }
    return true;
}