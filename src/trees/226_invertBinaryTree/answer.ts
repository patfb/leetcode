/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

const invertTree = (root: TreeNode | null): TreeNode | null => {
  if (!root) return null;

  let oldLeft = root.left;
  let oldRight = root.right;

  root.left = oldRight;
  root.right = oldLeft;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};
