class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let unique = new Set(nums);
        if (unique.size < nums.length) return true;
        return false
    }
}
