import scriptsList from "./scripts.js";


scriptsList.forEach((l) => {
    if (l.name == "Coptic") {
        console.log(l);
    }
});

// better as 
let copticScript = scriptsList.filter(script => script.name == 'Coptic')
console.log("coptic script", copticScript);


// make a map from the list of objects
let script = new Map()

for (let scr of scriptsList) {
    script.set(scr.name, scr);
}

// let script2 = new Map(scriptsList.map((script) => [script.name, script]));

console.log(script.size)
console.log(script.get("Zanabazar Square"))
console.log(script.get("Coptic"))