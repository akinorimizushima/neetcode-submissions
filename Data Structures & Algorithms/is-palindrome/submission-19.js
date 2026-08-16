class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;
        const skippable = {
            ',': true,
            ' ': true, 
            '?': true,
            "'": true,
            '.': true,
            ':': true,
        };
        while (l < r) {
            if (s[l] in skippable) {
                l++;
            } else if (s[r] in skippable) {
                r--;
            } else if (s[l].toLocaleLowerCase() !== s[r].toLocaleLowerCase()) {
                return false;
            } else {
                l++;
                r--;
            }
        }

        return true;
    }
}
