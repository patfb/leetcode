import { TreeNode } from "../treeNodeJs";

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root) => {
  if (!root) return 0;

  let maxDepth = 1;
  const stack = [[root, 1]];

  while (stack.length) {
    const [node, depthOfNode] = stack.pop();
    maxDepth = Math.max(maxDepth, depthOfNode);

    if (node.left) {
      stack.push([node.left, depthOfNode + 1]);
    }

    if (node.right) {
      stack.push([node.right, depthOfNode + 1]);
    }
  }

  return maxDepth;
};

export { maxDepth };
