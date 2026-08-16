class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const s = [];
        for(const c of tokens) {
            const n = parseInt(c);
            if (!isNaN(n)) {
                s.push(n);
            } else {
                const n1 = s.pop();
                const n2 = s.pop();
                let r = this.eval(n2, n1, c);
                s.push(r);

            }
        }

        return s[0];
    }

    eval(n1, n2, op) {
        if(op === "+") {
            return n1 + n2;
        } else if (op === "*") {
            return n1 * n2;
        } else if (op === "-") {
            return n1 - n2;
        } else if (op === "/") {
            if(n2 !== 0) {
                return parseInt(n1 / n2);
            }
        }

    }
}
