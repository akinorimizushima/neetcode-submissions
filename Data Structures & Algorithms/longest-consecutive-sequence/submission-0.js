class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numMap = {};
        for(let num of nums) {
            numMap[num] = true;
        }
        let longest = 0;
        for(let num of nums) {
            if(!([num - 1] in numMap)) {
                console.log("num", num)
                let streak = 1;
                while(num + streak in numMap) {
                    streak++;
                }
                longest = Math.max(longest, streak);
            }
        }

        return longest;
    }
}
