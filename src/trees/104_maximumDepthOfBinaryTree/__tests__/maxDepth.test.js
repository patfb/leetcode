import { describe, expect, it } from "@jest/globals";
import { maxDepth } from "../maxDepth";
import { TreeNode } from "../../treeNodeJs";

describe("104. Maximum Depth of Binary Tree", () => {
  const three = new TreeNode(3);
  const nine = new TreeNode(9);
  const twenty = new TreeNode(20);
  const fifteen = new TreeNode(15);
  const seven = new TreeNode(7);

  three.left = nine;
  three.right = twenty;
  twenty.left = fifteen;
  twenty.right = seven;

  it.each([{ root: three, expected: 3 }])(
    "$root -> $expected",
    ({ root, expected }) => {
      expect(maxDepth(root)).toStrictEqual(expected);
    },
  );
});
