class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let seen = new Map();
        let ans = []
        for (let i = 0; i < nums.length; i++) {
            let additor = target - nums[i]
            if (seen.has(additor)) {
                ans.push(i)
                ans.push(seen.get(additor))
            } else {
                seen.set(nums[i], i);
            }
        }
        return ans;
    }
}
