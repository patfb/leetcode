import { ListNode } from "../ListNode";

const addTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null => {
  const dummyNode = new ListNode();
  let current = dummyNode;

  let carry = 0;
  while (l1 || l2 || carry) {
    const l1Val = l1?.val || 0;
    const l2Val = l2?.val || 0;

    const result = l1Val + l2Val + carry;
    const remainder = result % 10;
    carry = Math.floor(result / 10);

    current.next = new ListNode(remainder);

    current = current.next;

    l1 = l1?.next || null;
    l2 = l2?.next || null;
  }

  return dummyNode.next;
};
