class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let seen = new Map()
        for (let i=0; i<nums.length; i++) {
            let current = nums[i];
            let complement = target-current;
            if (seen.has(complement)) {
                return [i, seen.get(complement)]
            } else {
                seen.set(current, i)
            }
        }
    }
}
