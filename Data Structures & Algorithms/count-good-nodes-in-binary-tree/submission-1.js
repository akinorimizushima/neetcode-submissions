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
    goodNodes(root) {
        const dfs = (node, max) => {
            if (!node) {
                return 0;
            }

            let res = node.val >= max ? 1 : 0;
            max = Math.max(max, node.val);
            res += dfs(node.right, max);
            res += dfs(node.left, max);

            return res;
        }
        return dfs(root, root.val);
    }
}
