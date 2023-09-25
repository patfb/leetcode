/* 
https://leetcode.com/problems/search-in-a-binary-search-tree/description/?envType=study-plan-v2&envId=leetcode-75
Runtime 80ms beats 21.67% of users with TypeScript
Memory 50.21MB beats 15.93% of users with TypeScript
*/

import { TreeNode } from "../TreeNode";

const four = new TreeNode(4);
const seven = new TreeNode(7);
const two = new TreeNode(2);
const one = new TreeNode(1);
const three = new TreeNode(3);

four.left = two;
four.right = seven;
two.left = one;
two.right = three;

const root = four;

const searchBST = (root: TreeNode | null, val: number): TreeNode | null => {
  const recursiveSearch = (root: TreeNode | null, val: number) => {
    if (root.val === val) return root;
    if (val < root.val && root.left) return recursiveSearch(root.left, val);
    if (val > root.val && root.right) return recursiveSearch(root.right, val);
    return null;
  };

  return recursiveSearch(root, val);
};

console.log("searchBST", searchBST(root, 2));
