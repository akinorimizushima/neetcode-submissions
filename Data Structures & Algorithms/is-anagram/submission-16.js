class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const countS = {};
        const countT = {};
        for (let key of s) {
            countS[key] = (countS[key] ?? 0) + 1;
        }

        for (let key of t) {
            countT[key] = (countT[key] ?? 0) + 1;
        }

        if (Object.keys(countS).length !== Object.keys(countT).length) {
            return false;
        }
        console.log(countS, countT)
        for (let key in countS) {
            if (countS[key] !== countT[key]) {
                return false;
            }
        }

        return true;
        
    }
}
