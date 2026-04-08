class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let i = 0;
        let right = nums.length-1;
        while (i<=right) {
            if (nums[i] === val) {     
                nums[i]=nums[right]
                right--
            } else {
                i++
            }
        }
        return i
    }
}
