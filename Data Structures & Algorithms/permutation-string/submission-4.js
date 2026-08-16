class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let i = 0;
        let j = s1.length - 1;

        const s1map = {};
        for (let c of s1) {
            s1map[c] = (s1map[c] ?? 0) + 1
        }

        console.log(s1map)

        while (j !== s2.length) {
            // console.log({i,j})
            const s2map = {};
            const s2sub = [...s2].slice(i, j + 1);
            // console.log(s2sub);
            for (let c of s2sub) {
                s2map[c] = (s2map[c] ?? 0) + 1
            }

            console.log({s2map, s1map})

            let b = true
            for(let key in s1map) {
                if (s2map[key] !== s1map[key]) {
                    b = false
                    break;
                }
            }

            if (b === true) {
                return true;
            }

            i++;
            j++;
        }

        return false;
    }
}

