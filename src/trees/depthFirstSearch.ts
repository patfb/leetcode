import { TreeNode } from "./TreeNode";

const a = new TreeNode("a");
const b = new TreeNode("b");
const c = new TreeNode("c");
const d = new TreeNode("d");
const e = new TreeNode("e");
const f = new TreeNode("f");

a.left = b;
a.right = c;

b.left = d;
b.right = e;

c.right = f;

/* Given a tree that looks like this      
      a
     / \
   b    c
  / \    \
 d   e    f

 */

const depthFirstPrint = (root: TreeNode | null): number[] => {
  const stack = [root];
  const seenValues = [];

  let iteration = 0;
  while (stack.length > 0) {
    console.log(
      `iteration: ${iteration}, stack:${stack.map((node) => node.val)}`,
    );

    const current = stack.pop();
    seenValues.push(current.val);

    console.log(`  current:${current.val}`);

    if (current.right !== null) {
      stack.push(current.right);
    }

    if (current.left !== null) {
      stack.push(current.left);
    }

    iteration++;
  }

  return seenValues;
};

console.log("depthFirstPrint", depthFirstPrint(a));
