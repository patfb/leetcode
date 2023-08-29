interface IListNode {
  val: number;
  next: ListNode | null;
}

class ListNode implements IListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export { ListNode, IListNode };
