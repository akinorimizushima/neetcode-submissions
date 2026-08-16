class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];

        for(let i = 0; i < tokens.length; i++) {
            const c = tokens[i];

            const n = parseInt(c, 10);
            

            if(isNaN(n)) {
                if (c === '/') {
                    const a = stack.pop();
                    const b = stack.pop();

                    stack.push(Math.trunc(b / a));
                }

                if (c === '*') {
                    const a = stack.pop();
                    const b = stack.pop();

                    stack.push(b * a);
                }

                if (c === '-') {
                    const a = stack.pop();
                    const b = stack.pop();

                    stack.push(b - a);
                }

                if (c === '+') {
                    const a = stack.pop();
                    const b = stack.pop();

                    stack.push(b + a);
                }
            } else {
                stack.push(n);
            }
        }

        return stack[0];
    }
}
