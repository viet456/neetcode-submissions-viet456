class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let right = nums.length - 1;
        let i = 0;
        while (i<=right) {
            if (nums[i]===val) {
                
                nums[i] = nums[right];
                right--;
            } else {
                i++;
            }
        }
        return i;
    }
}
