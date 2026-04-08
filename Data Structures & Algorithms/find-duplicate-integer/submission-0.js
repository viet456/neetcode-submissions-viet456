class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let check = [];
        // Range = nums.length - 1
        // eg [1,2,3,2,2], 1-4, 1 min 4 max values
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== check[nums[i]]) {
                check[nums[i]] = nums[i];
                continue;
            }
            return nums[i];
        }
    }
}
