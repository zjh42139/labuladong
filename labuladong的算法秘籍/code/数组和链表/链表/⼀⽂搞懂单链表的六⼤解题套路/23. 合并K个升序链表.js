import { MaxPQ } from "./utils";
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) return null;
  // 虚拟头节点
  let dummy = new ListNode(-1),
    p = dummy;
  // 优先级队列 最小堆
  // const
};
