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

        const sm = {};
        for(let i = 0; i < s.length; i++) {
            sm[s[i]] = (sm[s[i]] ?? 0) + 1;
        }

        const tm = {};
        for(let i = 0; i < t.length; i++) {
            tm[t[i]] = (tm[t[i]] ?? 0) + 1;
        }

        for(let key in sm) {
            if(sm[key] !== tm[key]) {
                return false;
            }
        }

        return true;
    }
}
