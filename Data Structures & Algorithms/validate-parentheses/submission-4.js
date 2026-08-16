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

        const stack = [];
        for (let c of s) {
            console.log({c, stack})
            if (closeToOpen[c]) {
                const last = stack.pop();
                if(last !== closeToOpen[c]) {
                    return false;
                }
            } else {
                stack.push(c);
            }
        }

        return !stack.length;
    }
}
