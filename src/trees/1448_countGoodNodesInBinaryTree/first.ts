import { TreeNode } from "../TreeNode";

const three = new TreeNode(3);
const one = new TreeNode(1);
const four = new TreeNode(4);
const threeLower = new TreeNode(3);
const oneLower = new TreeNode(1);
const five = new TreeNode(5);

three.left = one;
three.right = four;
one.left = threeLower;
four.left = oneLower;
four.right = five;

/* 
pre-order traversal: self, left, right
post-order traversal: left, right, self
in-order traversal: left, self, right
*/

const goodNodes = (root: TreeNode | null): number => {
  const stack = [root];
  let max = root.val;
  let totalGoodNodes = 1; // the root node counts as a good node

  while (stack.length) {
    const current = stack.pop();

    if (current.val >= max) totalGoodNodes++;

    // console.log(
    //   `value:${current.val}, max:${max}, totalGood:${totalGoodNodes}`,
    // );

    max = Math.max(current.val, max);

    if (current.left) {
      stack.push(current.left);
    }

    if (current.right) {
      stack.push(current.right);
    }
  }

  return totalGoodNodes;
};

console.log("goodNodes", goodNodes(three));

export {};
