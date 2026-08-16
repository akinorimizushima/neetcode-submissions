class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const map = {};
        for(let c of s1) {
            map[c] = (map[c] ?? 0) + 1
        }

        // let l = 0;
        // let r = s1.length;
    
        for(let i = 0; i < s2.length; i++) {
            const sub = s2.slice(i, i + s1.length);
            console.log({ sub})
            const countSub = {};
            for(let c of sub) {
                countSub[c] = (countSub[c] ?? 0) + 1
            }

            let res = true;
            for(const k in map) {
                if(countSub[k] !== map[k]) {
                    res = false;
                }
            }

            if(res) {
                return true;
            }
        }
        

        return false;
    }
}

// for(let i = 0; i < s2.length; i++) {
        //     for(let j = i + 1; j < s2.length; j++) {
        //         const sub = s2.slice(i, j);
        //         // console.log({ sub})
        //         const countSub = {};
        //         for(let c of sub) {
        //             countSub[c] = (countSub[c] ?? 0) + 1
        //         }

        //         let res = true;
        //         for(const k in map) {
        //             if(countSub[k] !== map[k]) {
        //                 res = false;
        //             }
        //         }

        //         console.log({sub, map, countSub, res})

        //         if(res === true) {
        //             return true;
        //         }
        //     }
        // }
