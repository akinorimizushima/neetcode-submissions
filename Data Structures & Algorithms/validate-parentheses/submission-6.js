class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const closeToOpen = {
            "]": "[",
            ")": "(",
            "}": "{",
        }
        let stack = [];

        for (const p of s) {
            console.log({stack})
            if (closeToOpen[p]) {
                if (stack.length && stack.at(-1) === closeToOpen[p]) {
                    stack.pop()
                } else {
                    return false;
                }
            } else {
                stack.push(p);
            }
        }

        console.log( stack)

        return !stack.length;
    }
}
