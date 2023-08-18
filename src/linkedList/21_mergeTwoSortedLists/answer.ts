/**
 * Definition for singly-linked list.
 
 */

interface ListNode {
  val: number;
  next: ListNode | null;
}

/* class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
} */

const mergeTwoLists = (
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null => {
  console.log("list1", list1);
  console.log("list2", list2);

  const mergedList = new ListNode();
  let tail = mergedList;

  console.log("merged list", mergedList);

  let iteration = 0;
  while (list1 && list2) {
    iteration++;
    console.log(`iteration:${iteration}`);
    console.log("   list1", list1);
    console.log("   list2", list2);
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }

  if (list1) {
    tail.next = list1;
  } else {
    tail.next = list2;
  }

  return mergedList.next;
};
