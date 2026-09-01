class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let l = 0;
        let r = s.length - 1
        let ignores = new Set([".", " ", "!", "?", "'", ',', ":"])
        let lowered = s.toLowerCase();

        while (l < r) {
            if (ignores.has(lowered[l])) {
                l++;
            } else if (ignores.has(lowered[r])) {
                r--;
            } else if (lowered[l] !== lowered[r]) {
                return false
            } else {
                l++;
                r--;
            }
        }

        return true
    }
}
