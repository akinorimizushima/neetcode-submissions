class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const smap = {};
        for (const c of s) {
            smap[c] = (smap[c] ?? 0) + 1;
        }

        const tmap = {};
        for (const c of t) {
            tmap[c] = (tmap[c] ?? 0) + 1;
        }

        if (Object.keys(smap).length !== Object.keys(tmap).length) {
            return false;
        }

        for (const k in smap) {
            if (smap[k] !== tmap[k]) {
                return false;
            }

        }

        return true;
    }
}
