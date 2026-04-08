class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        for (let num in nums) {
            nums.push(nums[num])
        }
        return nums
    }
}
