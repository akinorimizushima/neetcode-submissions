class Solution {

    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = {
            "]": "[",
            ")": "(",
            "}": "{",
        }
        const stack = []

        for (const char of s) {
            const isBracket = char in map;

            if (!isBracket) {
                stack.push(char);
                continue;
            }

            const isEq = stack.at(-1) === map[char];
            if(isEq) {
                stack.pop();
                continue;
            }

            return false;
        }

        return stack.length === 0;
    }
}
