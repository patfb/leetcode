import { ListNode } from "../ListNode";

const three = new ListNode(3);
const two = new ListNode(2);
const zero = new ListNode(0);
const negativeFour = new ListNode(-4);

three.next = two;
two.next = zero;
zero.next = negativeFour;
negativeFour.next = two;

const head = three;

const hasCycle = (head: ListNode | null): boolean => {
  const set = new Set<ListNode>();

  let current = head;

  while (current) {
    if (set.has(current)) return true;
    set.add(current);
    const next = current.next;
    current = next;
  }

  return false;
};

console.log("hasCycle", hasCycle(head));
