/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        if (!head || left === right) return head;
        let dummy = new ListNode(0, head)
        let prevLeft = dummy;
        let curr = head;
        for (let i = 0; i<left - 1; i++) {
            prevLeft = curr;
            curr = curr.next;
        }
        let prev = null;
        for (let i = 0; i<right-left+1; i++) {
            let tempNext = curr.next
            curr.next = prev;
            prev = curr;
            curr = tempNext;
        }
        prevLeft.next.next = curr;
        prevLeft.next = prev;
        return dummy.next;
    }
}
