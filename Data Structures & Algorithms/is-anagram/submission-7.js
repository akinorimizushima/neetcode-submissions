class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let m1 = {};
        for (let str of s) {
            m1[str] = (m1[str] ?? 0) + 1;
        }

        let m2 = {};
        for (let str of t) {
            m2[str] = (m2[str] ?? 0) + 1;
        }

        console.log(m1, m2)

        const longer = Object.keys(m1) > Object.keys(m2);
        for(let [k, v] of Object.entries(longer ? m1 : m2)) {
            console.log(k, v);
            if((longer ? m2[k] : m1[k]) !== v) {
                return false;
            }
        }

        return true;
    }
}
