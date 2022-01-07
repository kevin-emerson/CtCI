let Graph = require('../utilityClasses/Graph')
let LinkedList = require('../utilityClasses/LinkedList')

function checkRoute(node1, node2, graph) {
    if (node1 === node2) return true;

    let statusMap = {};

    for (const node of Object.entries(graph.nodes)) {
        statusMap[node] = 'unvisited';
    }

    let visitedNodes = new LinkedList();
    let tempNode;

    statusMap[node1] = 'visiting';
    visitedNodes.append(node1);

    while (visitedNodes.head != null) {
        tempNode = visitedNodes.popFirst();

        if (tempNode != null) {
            for (const node of Object.entries(graph.nodes)) {

                if (graph.nodes[tempNode.value] && graph.nodes[tempNode.value][node[0]] && statusMap[node] === 'unvisited') {

                    if (node[0] === node2) return true;
                    else {
                        statusMap[node] = 'visiting';
                        visitedNodes.append(node);
                    }
                }
            }
            statusMap[tempNode] = 'visited';
        }
    }

    return false;
}

/* TEST */
var graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
graph.addEdge('D', 'E');

console.log(checkRoute('A', 'C', graph), true);
console.log(checkRoute('A', 'E', graph), false);
console.log(checkRoute('B', 'A', graph), false);
console.log(checkRoute('D', 'E', graph), true);
