/* 
https://leetcode.com/problems/find-if-path-exists-in-graph/
Runtime 465ms beats 54.66% of users with TypeScript
Memory 196.92MB beats 22.66% of users with TypeScript
*/

const validPath = (
  n: number,
  edges: number[][],
  source: number,
  destination: number,
): boolean => {
  // console.log({
  //   n,
  //   edges,
  //   source,
  //   destination,
  // });

  // if we only have 1 node and the source is the same as the destination then return true
  if (n === 1 && source === destination) return true;

  // edges are the connections between the nodes

  // find all unique nodes
  const nodes = Array.from(new Set(edges.flat()));

  const createGraph = (
    nodes: number[],
    edges: number[][],
  ): Map<number, number[]> => {
    const adjacencyList = new Map<number, number[]>();

    const _addNode = (node: number) => {
      adjacencyList.set(node, []);
    };

    const _addEdge = (origin: number, destination: number) => {
      // add the origin to the destination's list
      adjacencyList.get(origin).push(destination);
      // add the destination to the origin's list
      adjacencyList.get(destination).push(origin);
    };

    nodes.forEach(_addNode);
    edges.forEach((edge) => _addEdge(edge[0], edge[1]));

    return adjacencyList;
  };

  const dfs = ({
    origin,
    destinationToFind,
    graph,
    totalNodes,
  }: {
    origin: number;
    destinationToFind: number;
    graph: Map<number, number[]>;
    totalNodes: number;
  }) => {
    let pathExists = false;
    const stack = [origin];
    const visited = new Set();

    while (visited.size <= totalNodes && !pathExists && stack.length) {
      const current = stack.pop();

      visited.add(current);
      const destinations = graph.get(current);

      // console.log(`current:${current}, destinations:${destinations}`);

      for (const destination of destinations) {
        if (destination === destinationToFind) {
          // console.log("found a path!");
          pathExists = true;
        }

        if (!visited.has(destination)) {
          stack.push(destination);
        }
      }
    }

    return pathExists;
  };

  const graph = createGraph(nodes, edges);
  // console.log("graph", graph);
  // const pathExists = bfs({
  //   origin: source,
  //   destinationToFind: destination,
  //   graph,
  // });
  const pathExists = dfs({
    origin: source,
    destinationToFind: destination,
    graph,
    totalNodes: n,
  });

  // console.log(`${pathExists} - between ${source} and ${destination}`);
  return pathExists;
};

console.log(
  "validPath",
  validPath(
    3,
    [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    0,
    2,
  ),
);

// console.log(
//   "validPath",
//   validPath(
//     10,
//     [
//       [4, 3],
//       [1, 4],
//       [4, 8],
//       [1, 7],
//       [6, 4],
//       [4, 2],
//       [7, 4],
//       [4, 0],
//       [0, 9],
//       [5, 4],
//     ],
//     5,
//     9,
//   ),
// );

// const _bfs = ({
//   origin,
//   destinationToFind,
//   graph,
// }: {
//   origin: number;
//   destinationToFind: number;
//   graph: Map<number, number[]>;
// }) => {
//   let pathExists = false;
//   const visited = new Set();
//   const queue = [origin];

//   // we can stop as soon as we find the first path
//   while (queue.length && !pathExists) {
//     const node = queue.shift();
//     const destinations = graph.get(node);

//     for (const destination of destinations) {
//       if (destination === destinationToFind) {
//         console.log("found a path!");
//         pathExists = true;
//       }

//       if (!visited.has(destination)) {
//         visited.add(destination);
//         queue.push(destination);
//       }
//     }
//   }
//   return pathExists;
// };
