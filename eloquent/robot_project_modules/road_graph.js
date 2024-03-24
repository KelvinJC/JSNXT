const roads = [
    "Alice's House-Bob's House", 
    "Alice's House-Cabin",
    "Alice's House-Post Office", 
    "Bob's House-Town Hall",
    "Daria's House-Ernie's House", 
    "Daria's House-Town Hall",
    "Ernie's House-Grete's House", 
    "Grete's House-Farm",
    "Grete's House-Shop", 
    "Marketplace-Farm",
    "Marketplace-Post Office", 
    "Marketplace-Shop",
    "Marketplace-Town Hall", 
    "Shop-Town Hall"
];

function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
        if (graph[from] == null) {
            graph[from] = [to];    // map new key `from` to array containing `to`
        } else {
            graph[from].push(to);  // add `to` to already created array mapped by key `from`
        }
    }

    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}

const roadGraph = buildGraph(roads);

// export as default module interface 
export default roadGraph; 

// other ways to export
//1. 
// Export binding as a named export
// export const roadGraph = buildgraph(roads);
// then declare all imports of roadGraph as import { roadGraph } instead of import roadGraph

//2.
// Export value returned from buildGraph function:

// export default buildGraph(roads);
// declare all imports of roadGraph as import roadGraph 
