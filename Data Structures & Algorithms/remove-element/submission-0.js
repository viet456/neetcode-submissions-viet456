class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let left = 0;
        let right = nums.length-1;
        let count = 0;
        while (left <= right) {
            if (nums[left]===val) {
                nums.splice(left, 1);
                right--
            } else if (nums[right]===val) {
                nums.splice(right, 1);
                right--
            } else {
                left++
                count++
            }
        }
        return count
    }
}
