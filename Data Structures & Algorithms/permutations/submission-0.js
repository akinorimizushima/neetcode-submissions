class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        if (nums.length === 0) {
            return [[]];
        }

        let perms = this.permute(nums.slice(1));
        let res = [];
        for (let p of perms) {
            for (let i = 0; i <= p.length; i++) {
                // let copy = [...p];
                // copy.splice(i, 0, nums[0]);

                let copy = [...p.slice(0, i), nums[0], ...p.slice(i)];
                const copy2 = [nums[0], ...p.slice(i, i)];

                console.log(p, copy, [nums[0], ...p], i)

                // console.log(p, copy)
                res.push(copy);
            }
        }

      
        return res;
    }
}
