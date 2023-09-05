// https://leetcode.com/problems/remove-duplicates-from-sorted-list
// Runtime 74ms beats 31.98% of users with TypeScript
// Memory 44.77MB beats 71.55% of users with TypeScript

// import { ListNode } from "../ListNode";

// const oneC = new ListNode(1, null);
// const oneB = new ListNode(1, oneC);
// const oneA = new ListNode(1, oneB);

const deleteDuplicates = (head: ListNode | null): ListNode | null => {
  let current = head;

  while (current) {
    while (current.next && current.next.val === current.val) {
      current.next = current.next.next;
    }
    current = current.next;
  }

  return head;
};

// console.log("deleteDuplicates", deleteDuplicates(oneA));
