class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let startVal = nums[0];
        let min = 0;
        for (let num in nums) {
            if (nums[num] < startVal) {
                min = num;
                return nums[min]
            }
        }
        return startVal
    }
}
