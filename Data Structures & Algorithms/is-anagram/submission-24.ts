class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const sChars = {}
        for (const c of s) {
            sChars[c] = (sChars[c] ?? 0) + 1
        }

        const tChars = {}
        for (const c of t) {
            tChars[c] = (tChars[c] ?? 0) + 1
        }

        if (Object.keys(tChars).length !== Object.keys(sChars).length) {
            return false
        }

        for (const sc in sChars) {
            if (sChars[sc] !== tChars[sc]) {
                return false
            }

        }

        return true
    }
}
