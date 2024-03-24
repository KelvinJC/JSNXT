import { runRobot } from "./run_robot.js";
import VillageState from "./village_state.js";


const mailRoute = [
    "Alice's House", "Cabin", "Alice's House", 
    "Bob's House", "Town Hall",  "Daria's House",  
    "Ernie's House",  "Grete's House",  "Shop",  
    "Grete's House",  "Farm", "Marketplace",  "Post Office"
];

function routeRobot(state, memory) {
    if (memory.length == 0) {
        memory = mailRoute;
    }
    return {direction: memory[0], memory: memory.slice(1)}
}

runRobot(VillageState.random(), routeRobot, []); // test routeRobot
