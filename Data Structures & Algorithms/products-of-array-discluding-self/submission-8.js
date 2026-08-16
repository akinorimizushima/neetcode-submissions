class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let pre = [];
        let post = [];

        let sum = 1;
        for(let i = 0; i < nums.length; i++) {
            const n = nums[i];
            sum *= n;
            pre[i] = sum;
        }
        sum = 1;
        for(let i = nums.length - 1; i >= 0; i--) {
            const n = nums[i];
            sum *= n;
            post[i] = sum;
        }

        console.log({ pre, post })
        let res = [];
        for(let i = 0; i < nums.length; i++) {
            const preN = pre[i - 1] ?? 1;
            const postN = post[i + 1] ?? 1; 
            console.log(preN, postN, i)
            res.push(preN * postN);
        }

        return res;
       
    }
}
