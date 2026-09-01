class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        const numMap = {}
        for (let i = 0; i < numbers.length; i++) {
            const n = numbers[i];
            numMap[n] = i;
        }

        for (let i = 0; i < numbers.length; i++) {
            const n = numbers[i];
            if (target - n in numMap && numMap[target - n] !== i) {
                return [i + 1, numMap[target - n] + 1]
            }

        }

        return []
    }
}
