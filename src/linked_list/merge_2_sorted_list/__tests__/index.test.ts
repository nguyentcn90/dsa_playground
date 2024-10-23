import {
  ListNode,
  mergeTwoLists,
  createLinkedList,
  linkedListToArray,
} from "../index";

describe("Merge Two Sorted Lists", () => {
  test("merges two sorted lists correctly", () => {
    const list1 = createLinkedList([1, 2, 4]);
    const list2 = createLinkedList([1, 3, 4]);
    const mergedList = mergeTwoLists(list1, list2);
    expect(linkedListToArray(mergedList)).toEqual([1, 1, 2, 3, 4, 4]);
  });

  test("handles empty lists", () => {
    expect(linkedListToArray(mergeTwoLists(null, null))).toEqual([]);
    const nonEmptyList = createLinkedList([1, 2, 3]);
    expect(linkedListToArray(mergeTwoLists(null, nonEmptyList))).toEqual([
      1, 2, 3,
    ]);
    expect(linkedListToArray(mergeTwoLists(nonEmptyList, null))).toEqual([
      1, 2, 3,
    ]);
  });

  test("handles lists of different lengths", () => {
    const list1 = createLinkedList([1, 2, 3, 4, 5]);
    const list2 = createLinkedList([6, 7]);
    expect(linkedListToArray(mergeTwoLists(list1, list2))).toEqual([
      1, 2, 3, 4, 5, 6, 7,
    ]);
  });
});

describe("Helper Functions", () => {
  test("createLinkedList creates a linked list correctly", () => {
    const list = createLinkedList([1, 2, 3]);
    expect(linkedListToArray(list)).toEqual([1, 2, 3]);
  });

  test("linkedListToArray converts a linked list to an array correctly", () => {
    const list = new ListNode(1, new ListNode(2, new ListNode(3)));
    expect(linkedListToArray(list)).toEqual([1, 2, 3]);
  });
});
