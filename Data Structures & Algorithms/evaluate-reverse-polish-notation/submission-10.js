class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const s = [];
        let r = null;

        for(const c of tokens) {
            
            const n = parseInt(c);
            if (!isNaN(n)) {
                s.push(n);
            } else {
                // console.log("s", s)

                const n1 = s.pop();
                const n2 = s.pop();
                let r = this.eval(n2, n1, c);
                console.log(n1, n2, c, "r=", r)
                s.push(r);

            }
        }

        console.log(s)

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
