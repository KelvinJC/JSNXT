/* 
Pathfinding

The robot could work more efficiently if it adjusted its behavior to the actual
work that needs to be done.

To do that, it has to be able to deliberately move toward a given parcel or
toward the location where a parcel has to be delivered. 

Doing that, even when the goal is more than one move away, 
will require some kind of route-finding function.

The problem of finding a route through a graph is a typical search problem.
We can tell whether a given solution (a route) is a valid solution, 
but we can’t irectly compute the solution the way we could for 2 + 2. 

Instead, we have to keep creating potential solutions until we find one that works.

The number of possible routes through a graph is infinite. 
But when searching for a route from A to B, 
we are interested only in the ones that start at A. 

We also don’t care about routes that visit the same place twice—those are
definitely not the most efficient route anywhere. 
So that cuts down on the number of routes that the route finder has to consider.

In fact, we are mostly interested in the shortest route. So we want to make
sure we look at short routes before we look at longer ones. 

A good approach would be to “grow” routes from the starting point,
exploring every reachable place that hasn’t been visited yet, 
until a route reaches the goal. 

That way, we’ll only explore routes that are potentially interesting, and we’ll find the
shortest route (or one of the shortest routes, if there are more than one) to the
goal.

Here is a function that does this:

*/

import roadGraph from "./road_graph.js";
import { runRobot } from "./run_robot.js";
import VillageState from "./village_state.js";

function findRoute(graph, from, to) {
    let work = [{at: from, route: []}];
    
    for (let i = 0; i < work.length; i++) {
        let {at, route} = work[i];
        
        for (let place of graph[at]) { // [ "Alice's House", 'Marketplace' ]
            if (place == to) {
                // console.log("work", work);
                return route.concat(place)
            };
            if (!work.some(w => w.at == place)) {
                work.push({at: place, route: route.concat(place)}); // {at: "Alice's House", route: ["Alice's House"]}
            }
        }
    }
}


export function goalOrientedRobot({place, parcels}, route) {
    if (route.length == 0) {
        let parcel = parcels[0];
        if (parcel.place != place) {
            route = findRoute(roadGraph, place, parcel.place);
        } else {
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    console.log("route -->", route)
    return {direction: route[0], memory: route.slice(1)};
}

let state = VillageState.random();
console.log(state);
runRobot(state, goalOrientedRobot, []);