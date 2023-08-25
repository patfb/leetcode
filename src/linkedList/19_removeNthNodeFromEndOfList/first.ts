/* 
https://leetcode.com/problems/remove-nth-node-from-end-of-list
Runtime 72ms beats 18.71% of users with TypeScript
Memory 44.59MB Beats 60.13% of users with TypeScript

This solution naively reverses the list, counts up to the item to be deleted, then
reverses the list again so it's forwards again. In order to do this in 1 pass you need to
use 2 pointers. Set the pointers a distance apart that equals the offset from the end of the list that
you want to remove, then traverse the list. When the right pointer hits the end the left pointer will be
at the position of the item that you want to remove.
*/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

interface ListNode {
  val: number;
  next: ListNode | null;
}

const reverseLinkedList = (inputHead: ListNode) => {
  const head = JSON.parse(JSON.stringify(inputHead)); // do this because structuredClone is not available

  let previous = null;
  let current = head;

  while (current) {
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  // console.log("previous is", JSON.stringify(previous, null, 2));
  // console.log("current is", JSON.stringify(current, null, 2));

  return previous;
};

const deletePosition = (inputHead: ListNode, positionToDelete: number) => {
  const head = JSON.parse(JSON.stringify(inputHead)); // do this because structured clone is not available

  // using a dummy node ensures that our linked list always has 1 element in it. This helps avoid edge cases
  const dummyNode: ListNode = { val: null, next: null };
  dummyNode.next = head;

  let previous: ListNode = dummyNode;
  let current = dummyNode.next;

  // iterate through the list until we get to the node we want
  for (let index = 1; index < positionToDelete; index++) {
    previous = current;
    current = current.next;
  }

  previous.next = current.next;

  return dummyNode.next;
};

const removeNthFromEnd = (
  head: ListNode | null,
  n: number,
): ListNode | null => {
  const reversed = reverseLinkedList(head);
  const deleted = deletePosition(reversed, n);
  const forwards = reverseLinkedList(deleted);

  // console.log("head is", JSON.stringify(head, null, 2));
  // console.log("reversed is", JSON.stringify(reversed, null, 2));
  // console.log("deleted reversed is", JSON.stringify(deleted, null, 2));
  // console.log("back to forwards is", JSON.stringify(forwards, null, 2));

  return forwards;
};

// const fakeHead = {
//   val: 1,
//   next: {
//     val: 2,
//     next: {
//       val: 3,
//       next: {
//         val: 4,
//         next: {
//           val: 5,
//           next: null,
//         },
//       },
//     },
//   },
// };

// const shortHead = {
//   val: 1,
//   next: null,
// };

// console.log(
//   "removeNthFromEnd",
//   JSON.stringify(removeNthFromEnd(fakeHead, 2), null, 2),
// );

// console.log("short", JSON.stringify(removeNthFromEnd(shortHead, 1), null, 2));
