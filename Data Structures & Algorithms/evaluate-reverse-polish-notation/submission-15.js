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
                const n2 = s.pop();
                const n1 = s.pop();
                
                let r;
                if(c === "+") {
                    r = n1 + n2;
                } else if (c === "*") {
                    r = n1 * n2;
                } else if (c === "-") {
                    r = n1 - n2;
                } else if (c === "/") {
                    r = parseInt(n1 / n2);
                }

                s.push(r);
            }
        }

        return s[0];
    }

    eval(n1, n2, op) {
        

    }
}
