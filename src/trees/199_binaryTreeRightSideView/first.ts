import { TreeNode } from "../TreeNode";

// const a = new TreeNode("a");
// const b = new TreeNode("b");
// const c = new TreeNode("c");
// const d = new TreeNode("d");
// const e = new TreeNode("e");
// const f = new TreeNode("f");

// a.left = b;
// a.right = c;

// b.left = d;
// b.right = e;

// c.right = f;

/* Given a tree that looks like this      
      a
     / \
   b    c
  / \    \
 d   e    f

 */

/* 
 
 Let's start by just traversing all the nodes
 We could keep track of where each node is left / right / up / down
 Use that info to figure out which nodes are obscured and which are visible
 Use negative numbers for horizontal left and positive for right. 0 will be the center
 */

interface NodePosition {
  node: TreeNode | null;
  horizontal: number;
  vertical: number;
}

// use level order traversal in order to figure this out
const rightSideView = (root: TreeNode | null): number[] => {
  if (!root) return [];

  const stack: NodePosition[] = [{ node: root, horizontal: 0, vertical: 0 }];
  const positions: NodePosition[] = [];

  while (stack.length) {
    const current = stack.pop();

    positions.push({
      node: current.node,
      horizontal: current.horizontal,
      vertical: current.vertical,
    });

    if (current.node?.left) {
      stack.push({
        node: current.node?.left,
        vertical: current.vertical + 1,
        horizontal: current.horizontal - 1,
      });
    }

    if (current.node?.right) {
      stack.push({
        node: current.node?.right,
        vertical: current.vertical + 1,
        horizontal: current.horizontal + 1,
      });
    }
  }

  /*  
  for each level take the value with the highest positive horizontal value
  let's do this with a map
  */

  const rightMap = new Map<number, NodePosition>(); // vertical, Coordinate

  positions.forEach((currentPos) => {
    if (rightMap.has(currentPos.vertical)) {
      const posInMap = rightMap.get(currentPos.vertical);

      if (currentPos.horizontal > posInMap.horizontal) {
        rightMap.set(currentPos.vertical, currentPos);
      }
    } else {
      rightMap.set(currentPos.vertical, currentPos);
    }
  });

  console.log("rightMap", rightMap);

  // you can pass a mapping function directly into Array.from()
  const rightMostValues = Array.from(
    rightMap,
    ([_key, entry]) => entry.node.val,
  );

  return rightMostValues;
};

// console.log("rightSideView", rightSideView(a));
