/* 
https://leetcode.com/problems/find-the-town-judge/description/
Runtime 113ms beats 23.61% of users with TypeScript
Memory 55.46MB beats 20.83% of users with TypeScript
*/

const findJudge = (n: number, trust: number[][]): number => {
  if (n === 1 && !trust.length) return 1; // the only person in town is the judge

  const nodes = Array(n)
    .fill(0)
    .map((_node, index) => index + 1);

  const createTrustGraph = (
    nodes: number[],
    edges: number[][],
  ): Map<number, number[]> => {
    const graph = new Map<number, number[]>();
    nodes.forEach((node) => graph.set(node, []));
    edges.forEach((edge) => {
      const [person, trusted] = edge;
      graph.get(person).push(trusted);
    });
    return graph;
  };

  const trustGraph = createTrustGraph(nodes, trust);

  const graphArray = Array.from(trustGraph, ([person, trusts]) => {
    return {
      person,
      trusts,
    };
  });

  // using reduce here to return an array of untrusting people. using reduce because
  // we're modifying the return value. filter would just return the key/value pairs from the map
  // but we only need the identifiers of the untrusting people - not the empty lists indicating
  // that they don't trust anybody because we already know that
  const untrustingPeople = graphArray.reduce(
    (accumulator, { person, trusts }) => {
      return !trusts.length ? [...accumulator, person] : accumulator;
    },
    [],
  );

  const judge = untrustingPeople.find((candidate) => {
    return graphArray.every(({ person, trusts }) => {
      if (candidate === person) return true; // if the person is the potention judge then skip
      if (trusts.includes(candidate)) return true; // check to make sure that potention judge is in trust array of person we're checking
      return false; // otherwise return false
    });
  });

  return judge === undefined ? -1 : judge;
};

// console.log(
//   "findJudge",
//   findJudge(3, [
//     [1, 3],
//     [2, 3],
//   ]),
// );

// console.log("findJudge", findJudge(1, []));
