class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = Array.from({length: temperatures.length}).fill(0);
        const s = [];

        for (let i = 0; i < temperatures.length; i++) {
            const t = temperatures[i];
            console.log("t", t);
            console.log("s", s);
            while (s.length > 0 && t > s.at(-1).at(0)) {
                console.log("s", s, res)
                let [, stackInd] = s.pop();
                res[stackInd] = i - stackInd;
            }
            s.push([t, i]);
        }

        return res;
    }
}
