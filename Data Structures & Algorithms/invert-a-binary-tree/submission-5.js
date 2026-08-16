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
        console.log(root)
        let curr = root;

        if(!curr) {
            return null;
        }

        // if (!curr.left || !curr.right) {
        //     return root;
        // }

        [curr.left, curr.right] = [curr.right, curr.left];
        
        if (curr.left) this.invertTree(curr.left)
        if (curr.right) this.invertTree(curr.right)

        return root;
    }


}
