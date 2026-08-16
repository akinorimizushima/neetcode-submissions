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
     * @return {number[]}
     */
    rightSideView(root) {
        const res = [];

        const dfs = (node, d = 0) => {
            if (!node) {
                return null;
            }

            if (res.length === d) {
                res.push(node.val);
            }

            dfs(node.right, d + 1);
            dfs(node.left, d + 1)

        }

        dfs(root);

        return res;
    }
}
