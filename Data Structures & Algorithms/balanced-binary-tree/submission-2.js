/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        if (!root) {
            return true;
        }

        const maxHeight = (node) => {
            if (!node) {
                return 0;
            }

            const left = maxHeight(node.left);
            const right = maxHeight(node.right);

            return 1 + Math.max(left, right);
        }

        const left = maxHeight(root.left);
        const right = maxHeight(root.right);

        if (Math.abs(left - right) > 1) {
            return false;
        }

        return this.isBalanced(root.left) && this.isBalanced(root.right);
        
    }
}
