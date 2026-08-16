class Solution {
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

            if(leftC === ' ' || leftC === '?' || leftC === ',' || leftC === "'" || leftC === "."
            || leftC === ":") {
                l++;
                continue;
            }

            if(rightC === ' ' || rightC === '?' || rightC === ',' || rightC === "'"|| rightC === "."
            || rightC === ":") {
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
