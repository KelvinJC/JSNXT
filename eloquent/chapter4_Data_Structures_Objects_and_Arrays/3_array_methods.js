// SHIFT & UNSHIFT

let todoList = [];

function remember(task) {
    todoList.push(task);
}

function getTask() {
    return todoList.shift();
}

function rememberUrgently(task) {
    todoList.unshift(task);
}

remember("groceries");
remember("laundry");
remember("clean the house");

console.log("Here's your todo list: \n", todoList);

console.log("\nNext task to do is:", getTask());
console.log("\nHere's your todo list: \n", todoList);
