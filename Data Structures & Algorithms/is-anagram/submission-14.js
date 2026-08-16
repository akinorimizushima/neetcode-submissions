class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       let sMap = {};
       let tMap = {};

        for(const ss of s) {
            sMap[ss] = (sMap[ss] ?? 0) + 1;
        }
        for(const st of t) {
            tMap[st] = (tMap[st] ?? 0) + 1;
        }

        if(Object.keys(sMap).length !== Object.keys(tMap).length) {
            return false;
        }

        for(const key in sMap) {
            if(tMap[key] !== sMap[key]) {
                return false;
            }
        }

       return true;
    }
}
