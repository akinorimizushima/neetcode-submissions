class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const blacketMap = {
            ")": "(",
            "]": "[",
            "}": "{",
        };
        for(const c of s) {
            console.log({ c, stack })
            if (blacketMap[c]) {
                if (stack.length > 0 && stack.at(-1) === blacketMap[c]) {
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
