class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = [];
        const closes = {
            ")": "(",
            "}": "{",
            "]": "[",
        };
        for (let c of s) {
            if (closes[c]) {
                if (stack.at(-1) === closes[c]) {
                    stack.pop()
                } else {
                    return false
                }
            } else {
                stack.push(c);
            }
        }

        return stack.length ? false : true;
    }
}
