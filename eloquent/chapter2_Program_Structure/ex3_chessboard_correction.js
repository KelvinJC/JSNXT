let size = 23;

let grid_box = "";

for (let y = 0; y < size; ++y) {
    for (let x = 0; x < size; ++x) {
        if ((x + y) % 2 == 0) {
            grid_box += "_";
        } else {
            grid_box += "#";
        }
    }
    grid_box += "\n";
}

console.log(grid_box);