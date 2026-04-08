class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let major = nums[0]
        let count = 1;
        let length = nums.length;
        for (let i=1; i<length; i++) {
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
