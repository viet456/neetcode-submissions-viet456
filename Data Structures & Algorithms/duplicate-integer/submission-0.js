class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let output = new Map();
        for (let num of nums) {
            output.set(num);
        }
        if (output.size === nums.length) {
            return false;
        } else {
            return true;
        }
    }
}
