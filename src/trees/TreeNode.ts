class TreeNode {
  val: number | string;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(
    val?: number | string,
    left?: TreeNode | null,
    right?: TreeNode | null,
  ) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export { TreeNode };
