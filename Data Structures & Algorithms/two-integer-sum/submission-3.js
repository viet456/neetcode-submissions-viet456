class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let indexes = new Map()
        for (let index = 0; index < nums.length; index++) {
            if (indexes.has(target - nums[index])) {
                return [indexes.get(target-nums[index]), index]
            }
            else {
                indexes.set(nums[index], index)
            }
        }
    }
}
