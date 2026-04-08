class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let startVal = nums[0];
        for (let num in nums) {
            if (nums[num] < startVal) {
                return nums[num]
            }
        }
        return startVal
    }
}
