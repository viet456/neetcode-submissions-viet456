class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let seen = new Map();
        let ans = []
        for (let num in nums) {
            if (seen.has(target-nums[num])) {
                ans.push(Number(seen.get(target-nums[num])), Number(num))
                return ans
            } else {
                seen.set(nums[num], num)
            }
        }
    }
}
