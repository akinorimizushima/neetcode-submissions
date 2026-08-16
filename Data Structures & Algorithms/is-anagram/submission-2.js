class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) {
            return false;
        }
        const countS = {};
        const countT = {};

        for(let i = 0; i < s.length; i++) {
            countS[s[i]] = countS[s[i]] === undefined ? 0 : countS[s[i]] + 1;
            countT[t[i]] = countT[t[i]] === undefined ? 0 : countT[t[i]] + 1;
        }

        for (const key in countS) {
            if(countT[key] !== countS[key]) {
                return false
            }
        }

        return true;
    }
    
}
