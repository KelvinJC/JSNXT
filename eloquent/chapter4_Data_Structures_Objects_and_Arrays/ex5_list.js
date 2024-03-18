/*
Write a function `arrayToList` that builds up a list structure like the one
shown when given [1, 2, 3] as argument. 

*/

let arr = [1, 2, 3, 5, 67, 54, -34, 546];
let list = { 
    value: 1, 
    rest: { 
        value: 2, 
        rest: { 
            value: 3, 
            rest: null 
        } 
    } 
};


function arrayToList(array) { /* return a list built from the elements in given array */
    let rest;
    for (let i = array.length - 1; i >= 0; i--) {
        rest = {
            value: array[i],
            rest: rest ? rest : null
        }
    }
    return rest;
}
listResult = arrayToList(arr);
console.log(JSON.stringify(listResult)); // to log result of conversion properly convert it to JSON


/*
Also write a `listToArray` function that produces an array from a list. 

*/
function listToArray(list) { /* return an array built from the values of list */
    arr = [];

    while (list.rest) {
        arr.push(list.value);
        list = list.rest;
    }
    arr.push(list.value);
    return arr;
}
console.log(listToArray(listResult));


/*
Then add helper functions:
`prepend` - which takes an element and a list and creates a new list
            that adds the element to the front of the input list, and 

`nth` - which takes a list and a number and returns the element 
        at the given position in the list (with zero referring to the first
        element) or undefined when there is no such element.

*/

function prepend(element, list) { /* return a new list with element at the front of the input list */
    newList = {
        value: element,
        rest: list
    }
    return newList;
}

prependResult = prepend(4590, listResult);
console.log(JSON.stringify(prependResult));  /* to log result of conversion properly convert it to JSON */

function nth(list, position) { /* return the element at the given position in the list 
                                  or undefined when there is no such element 
                               */

    let count = 0;
    while (list) {
        if (count == position) {
            return list.value;
        } else {
            list = list.rest;
            ++count;
        }   
    }
    return undefined;
}

console.log("iterative Nth", nth(prependResult, 0));
// --> 4590
console.log("iterative Nth", nth(prependResult, 9));
// --> undefined

/*
If you haven’t already, also write a recursive version of `nth`.

*/

function recursiveNth(list, position) { /* recursive version of nth */
    if (position == 0) {
        return list ? list.value : undefined;
    } else {
        return recursiveNth(list.rest, position - 1);
    }
}

console.log("recursive Nth", recursiveNth(prependResult, 7));
// --> -34
console.log("recursive Nth", recursiveNth(prependResult, 9));
// --> undefined




/* For fun and extra practice, tried my hands at a recursive version to arrayToList */
function recursiveArrayToList(array) { /* recursive version of arrayToList */
    if (currentFirst = array.shift()) { /* get current first element of array */
        rest = {
            value: currentFirst,
            rest: recursiveArrayToList(array),
        }
        return rest;
    } else {
        return null;
    }
}
let recursiveToList = recursiveArrayToList(arr);
console.log("recursive to List", JSON.stringify(recursiveToList));


// --> recursive to List 
//  {"value": 1, "rest": {"value": 2, "rest": {"value": 3, "rest": {"value": 5, "rest": {"value": 67, "rest": {"value": 54, "rest": {"value": -34, "rest": {"value": 546, "rest":null }}}}}}}}

// spread out to read better:
// {
//     "value": 1,
//     "rest":  {
//           "value": 2,
//           "rest":  {
//               "value": 3,
//               "rest":  {
//                   "value": 5,
//                   "rest":  {
//                       "value": 67,
//                       "rest":  {
//                           "value": 54,
//                           "rest":  {
//                               "value": -34,
//                               "rest":  {
//                                   "value": 546,
//                                   "rest":  null
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }