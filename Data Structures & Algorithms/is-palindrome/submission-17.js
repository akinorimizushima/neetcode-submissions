class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;
        const ignoreSet = new Set([
            " ", "?", ",", "'", '.', ":"
        ])

        while (l < r) {
            let pre = s[l].toLowerCase();
            let suff = s[r].toLocaleLowerCase();

            if (ignoreSet.has(pre)) {
                l++;
                continue;
            }
            if (ignoreSet.has(suff)) {
                r--;
                continue;
            }

            if(pre !== suff) {
                return false;
            }

            l++;
            r--;

        }

        return true;
    }
}
