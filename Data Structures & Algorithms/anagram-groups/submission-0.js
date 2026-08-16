class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};
        for(let i = 0; i < strs.length; i++) {
            const str = strs[i];

            const sorted = str.split('').sort().join('');
            if(!res[sorted]) {
                res[sorted] = []    
            }
            res[sorted].push(str);
            
            // const m = {};
            // for(let j = 0; j < str.length; j++) {
            //     m[str[j]] = (m[str[j]] ?? 0) + 1;
            // }

            // ms.push(m);
        }

        return Object.values(res);
    }
}
