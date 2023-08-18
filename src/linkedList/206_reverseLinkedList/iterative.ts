// https://leetcode.com/problems/reverse-linked-list
// Runtime 63ms beats 66.56% of users with TypeScript
// Memory 44.84mb beats 61.55% of users with TypeScript

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

interface IListNode {
  val: number;
  next: IListNode;
}

const reverseList = (head: IListNode | null): IListNode | null => {
  // head's .toString() method must traverse the whole list under the hood because each node is just 1 element

  let previous = null;
  let current = head;

  while (current) {
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
};
