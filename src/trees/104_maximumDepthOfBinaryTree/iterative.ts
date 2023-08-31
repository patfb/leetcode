import { TreeNode } from "../TreeNode";

// const a = new TreeNode("a");
// const b = new TreeNode("b");
// const c = new TreeNode("c");
// const d = new TreeNode("d");
// const e = new TreeNode("e");
// const f = new TreeNode("f");

// a.left = b;
// a.right = c;

// b.left = d;
// b.right = e;

// c.right = f;

/* Given a tree that looks like this      
      a
     / \
   b    c
  / \    \
 d   e    f

 */

const maxDepth = (node: TreeNode | null): number => {
  if (!node) return 0;

  let maxDepth = 1;

  const stack: [TreeNode, number][] = [[node, 1]];

  while (stack.length > 0) {
    const [node, depthOfNode] = stack.pop();

    maxDepth = Math.max(maxDepth, depthOfNode);

    if (node.left) stack.push([node.left, depthOfNode + 1]);
    if (node.right) stack.push([node.right, depthOfNode + 1]);
  }
  return maxDepth;
};

// console.log("maxDepth", maxDepth(a));
