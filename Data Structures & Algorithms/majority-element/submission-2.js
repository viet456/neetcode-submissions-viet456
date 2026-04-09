class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let counts = new Map();
        for (let i=0; i<nums.length; i++) {
            counts.set(nums[i], (counts.get(nums[i]) || 0) + 1);
            if (counts.get(nums[i]) > Math.floor(nums.length/2)) {
                return nums[i]
            }
        }
    }
}
