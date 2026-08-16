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
        const s2 = [...s].sort();
        const t2 = [...t].sort();

        for(let i = 0; i < s.length; i++) {
            if(s2[i] !== t2[i]) {
                return false;
            }
        }

        return true;
    }
    
}
