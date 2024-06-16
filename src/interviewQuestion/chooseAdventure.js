class TreeNode {
  constructor({ value = 0, left = null, right = null } = {}) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const chooseAdventure = (choices, end) => {
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

  const choiceMap = new Map();
  const endSet = new Set(end);
  const rootNode = new TreeNode({ value: 1 });
  const allPaths = [];

  console.log("endSet", endSet);

  choices.forEach((choice) => {
    const [page, option1, option2] = choice;
    choiceMap.set(page, [option1, option2]);
  });

  const buildTree = ({ node, depth, pathSoFar }) => {
    console.log("node is", { node, depth, pathSoFar });
    if (endSet.has(node.value)) {
      const finalPath = [...pathSoFar, node.value];
      allPaths.push(finalPath);
      console.log("---> **** end of tree", { node, depth, pathSoFar });
      return null;
    }

    if (choiceMap.has(node.value)) {
      console.log("---> ######### choice map has entry for", node.value);
      const [leftChoice, rightChoice] = choiceMap.get(node.value);
      node.left = new TreeNode({ value: leftChoice });
      node.right = new TreeNode({ value: rightChoice });

      console.log("---> @@@@@ appended children to node", node);
      console.log("---> !!!!!! node.left is", node.left);
      console.log("---> !!!!!! node.right is", node.right);

      buildTree({
        node: node.left,
        depth: depth + 1,
        pathSoFar: [...pathSoFar, node.value],
      });
      buildTree({
        node: node.right,
        depth: depth + 1,
        pathSoFar: [...pathSoFar, node.value],
      });
    } else {
      node.left = new TreeNode({ value: node.value + 1 });
      buildTree({
        node: node.left,
        depth: depth + 1,
        pathSoFar: [...pathSoFar, node.value],
      });
    }
  };

  buildTree({ node: rootNode, depth: 0, pathSoFar: [] });

  console.log("all possible paths through the book", allPaths);

  return allPaths;
};

export { chooseAdventure };
