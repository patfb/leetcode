class TreeNode {
  val: number | string;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(
    val?: number | string,
    left: TreeNode | null = null,
    right: TreeNode | null = null,
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export { TreeNode };
