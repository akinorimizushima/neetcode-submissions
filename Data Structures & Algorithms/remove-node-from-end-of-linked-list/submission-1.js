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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const rec = (head) => {
            if (!head) {
                return null;
            }

            head.next = rec(head.next);
            n--;

            return n === 0 ? head.next : head;

        }

        return rec(head);
    }

    
}
