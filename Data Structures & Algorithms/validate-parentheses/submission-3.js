class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const blakets = {
            ")": "(",
            "]": "[",
            "}": "{",
        };
        const stack = [];

        for(const c of s) {
            if(c === "(" || c === "{" || c === "[") {
                stack.push(c);
            } else {
                const s = stack.pop();
                if(blakets[c] !== s) {
                    return false;
                }
            }
        }

        if (stack.length) {
            return false;
        }

        return true;
        
    }
}
