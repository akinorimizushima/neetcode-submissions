class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let res = [];
        let opens = 0; 
        let closes = 0;

        this.backtrack(opens, closes, n, res, '');

        return res;
    }

    backtrack(opens, closes, n, res, s) {
        console.log(s);
        if(opens === n && closes === n) {
            res.push(s);
            console.log(res);
            return;
        }

        if (opens < n) {
            this.backtrack(opens + 1, closes, n, res, s + "(")
        }

        if (closes < opens) {
            this.backtrack(opens, closes + 1, n, res, s + ")")
        }
    }
}
