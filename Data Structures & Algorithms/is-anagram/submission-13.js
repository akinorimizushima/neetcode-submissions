class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       let sMap = {};
       let tMap = {};

       for(let i = 0; i < s.length; i++) {
        sMap[s[i]] = (sMap[s[i]] ?? 0) + 1;
       }
        for(let i = 0; i < t.length; i++) {
        tMap[t[i]] = (tMap[t[i]] ?? 0) + 1;
       }

        const sKeys = Object.keys(sMap)
        const tKeys = Object.keys(tMap);
       for(let [k] in (sKeys > tKeys ? sMap : tMap)) {
            console.log(sMap, tMap)
            if(tMap[k] !== sMap[k]) {
                return false;
            }
       }

       return true;
    }
}
