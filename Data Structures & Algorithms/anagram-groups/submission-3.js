class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anaglams = {};

        for(let i = 0; i < strs.length; i++) {
            let str = strs[i];
            let sorted = str.split('').sort().join();
            if(sorted in anaglams) {
                anaglams[sorted].push(str);
            } else {
                anaglams[sorted] = [str];
            }
        }

        return Object.values(anaglams);
    }
}
