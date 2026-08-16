class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagrams = {};

        for (const s of strs) {
            const key = [...s].sort().join('');
            if (key in anagrams) {
                anagrams[key].push(s);
            } else {
                anagrams[key] = [s];
            }
        }   


        return Object.values(anagrams);

        
    }
}
