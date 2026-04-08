class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let major = nums[0]
        let count = 1;
        for (let i=1; i<nums.length; i++) {
            if (major === nums[i]) {
                count++
            } else {
                count--
            }
            if (count < 0) {
                major=nums[i]
            }
        }
        return major
    }
}
