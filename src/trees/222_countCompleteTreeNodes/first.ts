// import { TreeNode } from "../TreeNode";

// const one = new TreeNode(1);
// const two = new TreeNode(2);
// const three = new TreeNode(3);
// const four = new TreeNode(4);
// const five = new TreeNode(5);
// const six = new TreeNode(6);

// one.left = two;
// one.right = three;
// two.left = four;
// two.right = five;
// three.left = six;

// const root = one;

// const countNodes = (root: TreeNode | null): number => {
//   const stack = [{ node: root, level: 0 }];

//   let deepestRight = 0;

//   while (stack.length) {
//     const current = stack.pop();

//     if (current.node?.right === null) {
//       console.log("deepest right", current.level);
//     }

//     if (current.node?.right) {
//       stack.push({ node: current.node.right, level: current.level + 1 });
//     }

//     if (current.node?.left) {
//       stack.push({ node: current.node.left, level: current.level + 1 });
//     }
//   }
// };

// console.log("countNodes", countNodes(root));
