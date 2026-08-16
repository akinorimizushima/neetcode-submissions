class Solution {
    ignoreList = {
        ' ': true,
        '?': true, 
        ',': true, 
        "'": true,
        ".": true,
        ":": true
    };

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while(l < r) {
            const leftC = s[l];
            const rightC = s[r];
            console.log("leftC", leftC, "rigthC", rightC)

            if(this.ignoreList[leftC]) {
                l++;
                continue;
            }

            if(this.ignoreList[rightC]) {
                r--;
                continue;
            }

            if(leftC.toLocaleLowerCase() !== rightC.toLocaleLowerCase()) {
                return false;
            }

            l++;
            r--;
        }

        return true;
    }
}
