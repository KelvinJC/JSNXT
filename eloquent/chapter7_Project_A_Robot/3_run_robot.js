
/*
Simulation
A delivery robot looks at the world and decides in which direction it wants to move.

As such, we could say that a robot is a function that takes a
VillageState object and returns the name of a nearby place.

Because we want robots to be able to remember things, so that they can
make and execute plans, we also pass them their memory and allow them to
return a new memory. 

Thus, the thing a robot returns is an object containing
both the direction it wants to move in and a memory value that will be given
back to it the next time it is called.
*/

function runRobot(state, robot, memory) {
    for (let turn = 0; ; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`);
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}

/*
Consider what a robot has to do to “solve” a given state. 
It must 
- pick up all parcels 
- by visiting every location that has a parcel and
- deliver them 
- by visiting every location that a parcel is addressed to, but only after picking up the parcel.

If a random strategy is chosen for the robot, the robot could just walk in a random direction at every turn
*/

function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])}
}
