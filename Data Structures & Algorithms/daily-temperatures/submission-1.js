class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        const res = Array.from({ length: temperatures.length }).fill(0);
        
        for (let i = 0; i < temperatures.length; i++) {
            const t = temperatures[i];
            while (stack.length && t > stack.at(-1).at(1)) {
                const [stackI, stackT] = stack.pop();
                console.log({stackI,stackT})
                res[stackI] = i - stackI;
            }

            stack.push([i, t]);
        }

        return res;
    }
}
