class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;
        let s2 = s.toLocaleLowerCase();
        const m = {
            " ": true,
            "?": true,
            ",": true,
            "'": true,
            ".": true,
            ":": true,
        }
        
        while(l < r) {
            const sl = s2[l];
            const sr = s2[r];
            console.log(sl, sr)
            
            if(m[sl]) {
                l++;
                continue;
            }

            if(m[sr]) {
                r--;
                continue;
            }

            if(sl !== sr) {
                return false;
            }

            l++;
            r--;
        }

        return true;
    }
}
