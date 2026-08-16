class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagrams = {};

        for (let str of strs) {

            const sorted = [...str].sort();

            if (anagrams[sorted]) {
                anagrams[sorted].push(str);
            } else {
                anagrams[sorted] = [str];
            }
        }

        return Object.values(anagrams);

        
    }
}
