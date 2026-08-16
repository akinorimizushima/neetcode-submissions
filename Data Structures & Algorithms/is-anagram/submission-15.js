class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sCount = {};
        const tCount = {};

        for (let c of s) {
            sCount[c] = (sCount[c] ?? 0) + 1;
        }

        for (let c of t) {
            tCount[c] = (tCount[c] ?? 0) + 1;
        }

        if (Object.keys(sCount).length !== Object.keys(tCount).length) {
            return false;
        }


        for (let key in sCount) {
            if(sCount[key] !== tCount[key]) {
                return false;
            }
        }

       return true;
    }
}
