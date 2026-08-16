class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        let i = 0;
        const closing = {
            ")": "(",
            "]": "[",
            "}": "{",
        };
        for (let c of s) {
            if(closing[c]) {
                if (stack.length > 0 && stack[stack.length - 1] === closing[c]) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(c);
            }
        }

        return stack.length === 0;
    }
}
