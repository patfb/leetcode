// https://leetcode.com/problems/balanced-binary-tree
// Runtime 69ms beats 65.63% of users with TypeScript
// Memory 49.95MB Beats 17.59% of users with TypeScript

import { TreeNode } from "../TreeNode";

const a = new TreeNode("a");
const b = new TreeNode("b");
const c = new TreeNode("c");
const d = new TreeNode("d");
const e = new TreeNode("e");
const f = new TreeNode("f");
const g = new TreeNode("g");

a.left = b;
b.left = d;
d.left = f;
a.right = c;
c.right = e;
e.right = g;

/* Given a tree that looks like this:
      a
     / \
    b   c
   /     \
  d       e
 /         \
f           g

*/

const isBalanced = (root: TreeNode | null): boolean => {
  // let iterations = 0;

  const dfsBalanced = (
    node: TreeNode | null,
  ): { val: string | number; balanced: boolean; height: number } => {
    // iterations++;
    if (!node) return { val: null, balanced: true, height: 0 }; // yes it's balanced and it has height 0

    const left = dfsBalanced(node.left);
    const right = dfsBalanced(node.right);

    const balanced =
      left.balanced &&
      right.balanced &&
      Math.abs(left.height - right.height) <= 1;

    const thisNode = {
      val: node.val,
      balanced,
      height: Math.max(left.height, right.height) + 1,
    };

    // console.log(`node val: ${node?.val || null}`);
    // console.log(`   left:${JSON.stringify(left)}`);
    // console.log(`   right:${JSON.stringify(right)}`);
    // console.log(`   itself:${JSON.stringify(thisNode)}`);

    if (!balanced) throw Error("not balanced"); // short circuit so we avoid running more iterations than we need to

    return thisNode;
  };

  let allBalanced = false;

  try {
    allBalanced = dfsBalanced(root).balanced;
  } catch (error) {}

  // console.log("iterations", iterations);
  return allBalanced;
};

console.log("isBalanced", isBalanced(a));
