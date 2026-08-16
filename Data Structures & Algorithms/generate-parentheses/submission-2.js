class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];
        
        const backtrack = (opens, closes, stack) => {
            if (opens === closes && opens === n) {
                res.push(stack);
                return;
            }

            if (opens < n) {
                backtrack(opens + 1, closes, stack + "(");
            } 
            if (opens > closes) {
                backtrack(opens, closes + 1, stack + ")");
            }
        }

        backtrack(0, 0, '');

        return res;
        
    }
}
