var Graph = require('../utilityClasses/Graph');

function findNodeWithNoChildren(graph) {
    for (var node in graph.nodes) {
        if (Object.keys(graph.nodes[node]).length === 0) {
            return node;
        }
    }
    return undefined;
}

var buildOrder = function(projects, dependencies) {
    let graph = new Graph();
    projects.forEach(project => {
        graph.addNode(project);
    });
    dependencies.forEach(dependency => {
        graph.addEdge(dependency[1], dependency[0]);
    });

    let answer = [];
    let curr = findNodeWithNoChildren(graph);

    while (curr !== undefined) {
        answer.push(curr);
        graph.removeNode(curr);
        curr = findNodeWithNoChildren(graph);
    }

    if (answer.length === projects.length) return answer;
    else return 'error';

};

/* TEST */
var projects = ['a', 'b', 'c', 'd', 'e', 'f'];
var dependencies = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']];
console.log(buildOrder(projects, dependencies));

projects = ['a', 'b', 'c', 'd'];
dependencies = [['a', 'd'], ['d', 'c'], ['c', 'a']];
console.log(buildOrder(projects, dependencies), 'error');
