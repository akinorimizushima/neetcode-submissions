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
     * @return {TreeNode}
     */
    invertTree(root) {
        let curr = root;

        if(!root) {
            return null;
        }

        [root.left, root.right] = [root.right, root.left];
        
        if (curr.left) this.invertTree(root.left)
        if (curr.right) this.invertTree(root.right)

        return root;
    }


}
