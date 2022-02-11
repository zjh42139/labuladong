/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(-1, head);
  // 删除倒数第 n 个，要先找倒数第 n + 1 个节点
  let node = findFromEnd(dummy, n + 1);
  // 删掉倒数第 n 个节点
  node.next = node.next.next;
  return dummy.next;
};
// 返回链表的倒数第k个节点
function findFromEnd(head, k) {
  let p1 = head;
  // p1 先走 k 步
  for (let i = 0; i < k; i++) {
    p1 = p1.next;
  }
  let p2 = head;
  // p1 和 p2 同时走n-k步
  while (p1 != null) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p2;
}
