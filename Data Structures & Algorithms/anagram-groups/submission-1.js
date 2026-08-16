class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let result = {};
        for (let i = 0; i < strs.length; i++) {
            const str = strs[i];
            const sorted = [...str].sort().join('');
            console.log(result, sorted)
            const arr = result[sorted] ?? []
            arr.push(str);

            result[sorted] = arr;
        }

        return Object.values(result);
    }
}
