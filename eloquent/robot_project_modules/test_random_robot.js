import roadGraph from "./road_graph.js";
import VillageState from "./village_state.js";
import { randomPick } from "./utils.js";
import { runRobot } from "./run_robot.js";


function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])}
}

runRobot(VillageState.random(), randomRobot); // test with randomRobot
