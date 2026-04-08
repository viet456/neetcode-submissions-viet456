class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let unique = new Set(nums)
        return unique.size < nums.length
    }
}
