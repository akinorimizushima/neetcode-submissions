class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const calcs = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "*": (a, b) => a * b,
            "/": (a, b) => b === 0 ? 0 : Math.trunc(a / b),
        } as const

        const stack = [];

        for (let token of tokens) {
            if (!(token in calcs)) {
                stack.push(token);
            } else {
                const calc = calcs[token];
                const b = stack.pop()
                const a = stack.pop()

                stack.push(calc(parseInt(a), parseInt(b)))
            }
        }

        return stack.pop() ?? -1
    }
}
