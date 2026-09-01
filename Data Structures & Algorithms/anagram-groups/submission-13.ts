class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const m = new Map<string, string[]>()

        for (const str of strs) {
            const key = [...str].sort().join("")
            const val = m.has(key) ? [...m.get(key), str] : [str];
            m.set(key, val)
        }

        return [...m.values()]
    }
}
