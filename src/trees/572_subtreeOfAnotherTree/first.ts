// import { TreeNode } from "../TreeNode";

// /*
// pre-order traversal: self, left, right
// post-order traversal: left, right, self
// in-order traversal: left, self, right
// */

// // root
// const three = new TreeNode(3);
// const four = new TreeNode(4);
// const five = new TreeNode(5);
// const one = new TreeNode(1);
// const two = new TreeNode(2);

// three.left = four;
// three.right = five;
// four.left = one;
// four.right = two;

// const root = three;

// const sFour = new TreeNode(4);
// const sOne = new TreeNode(1);
// const sTwo = new TreeNode(2);

// sFour.left = sOne;
// sFour.right = sTwo;

// const subRoot = sFour;

// const isSubtree = (
//   root: TreeNode | null,
//   subRoot: TreeNode | null,
// ): boolean => {
//   const bfsLevelOrder = (root: TreeNode | null) => {
//     const levelMap = new Map<number, (number | null)[]>();
//     const queue = [{ node: root, level: 0 }];

//     while (queue.length) {
//       const current = queue.shift();
//       console.log("current", current);

//       if (levelMap.has(current.level)) {
//         const levelValues = levelMap.get(current.level);

//         levelMap.set(current.level, [
//           ...levelValues,
//           current?.node?.val || null,
//         ]);
//       } else {
//         levelMap.set(current.level, [current?.node?.val || null]);
//       }

//       if (current.node) {
//         if (current.node.left) {
//           queue.push({
//             node: current?.node?.left,
//             level: current.level + 1,
//           });
//         }

//         if (!current.node.left) {
//           queue.push({
//             node: null,
//             level: current.level + 1,
//           });
//         }

//         if (current.node.right) {
//           queue.push({
//             node: current?.node?.right,
//             level: current.level + 1,
//           });
//         }

//         if (!current.node.right) {
//           queue.push({
//             node: null,
//             level: current.level + 1,
//           });
//         }
//       }
//     }

//     return levelMap;
//   };

//   const levelMap = bfsLevelOrder(root);
//   const levelMapArray = Array.from(levelMap);
//   console.log("levelMap", levelMap);
//   console.log("levelMapArray", levelMapArray);
// };

// console.log("isSubtree", isSubtree(root, subRoot));
