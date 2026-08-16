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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let max = 0;

        const maxHeight = (node) => {
            if (!node) {
                return 0;
            }

            const leftDepth = maxHeight(node.left);
            const rightDepth = maxHeight(node.right);
            max = Math.max(max, leftDepth + rightDepth);
            
            return 1 + Math.max(leftDepth, rightDepth);
        }

        maxHeight(root);

        return max;
    }

}
