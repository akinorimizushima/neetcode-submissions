class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let r = 1;
        let max = 0;

        for(let i = 0; i < s.length; i++) {
            let last = "";
            let sub = last + s[i];

            for(let j = i + 1; j < s.length; j++) {
                console.log({i, sub})
                const c = s[j];
                if(sub.includes(c)) {
                    max = Math.max(max, sub.length);
                    last = c;
                    break;
                } else {
                    sub += c;
                }
            }   

            max = Math.max(max, sub.length);         
        }

        return max;
       
    }
}

// zxyzxyz
// 1: z, sub: ""
// 2: x, sub: "z"
// 3: y, sub: "zx"
// 4: z, sub: "zxy" dup length 3
// 5: x, sub: "z"
// 6: y, sub: "zx"
// 7: z, sub: "zxy" dup length 3
// res: 3
