/*
Project: A Robot
Measuring a robot
You’ll have to write a variant of the runRobot function that, instead of logging
the events to the console, returns the number of steps the robot took to
complete the task.

Your measurement function can then, in a loop, generate new states and
count the steps each of the robots takes. When it has generated enough measurements,
it can use console.log to output the average for each robot, which
is the total number of steps taken divided by the number of measurements.
*/

import { countRobotTurns } from "./run_robot.js";
import { goalOrientedRobot } from "./test_goal_oriented_robot.js";
import { routeRobot } from "./test_route_robot.js";
import VillageState from "./village_state.js";

function compareRobots(robot1, memory1, robot2, memory2) {
    let robot1Scores = [], robot2Scores = [];
    let robot1Avg, robot2Avg;

    for (let i = 0; i < 100; ++i) {
        let state = VillageState.random();
        robot1Scores.push(countRobotTurns(state, robot1, memory1));
        robot2Scores.push(countRobotTurns(state, robot2, memory2));
    }

    robot1Avg = robot1Scores.reduce((a, b) => a + b)/robot1Scores.length;
    robot2Avg = robot2Scores.reduce((a, b) => a + b)/robot2Scores.length;
    
    console.log(`Average performance for ${robot1.name} = ${robot1Avg} turns per task`);
    console.log(`Average performance for ${robot2.name} = ${robot2Avg} turns per task`);
}

compareRobots(goalOrientedRobot,[], routeRobot, []);
