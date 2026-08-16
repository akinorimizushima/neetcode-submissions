class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let l = 0;
        let r = s1.length - 1;
        const sorted = [...s1].sort().join('');
        while (l <= s2.length) {
            const sub = s2.slice(l, r + 1);

            console.log([...sub].sort().join(''), sorted)

            if([...sub].sort().join('') === sorted) {
                return true;
            }
            
            l++;
            r++;
        }

        return false;
    }
}

