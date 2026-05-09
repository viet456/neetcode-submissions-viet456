class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let low = 0, mid = 0;
        let high = nums.length - 1;
        while (mid <= high) {
            if (nums[mid] === 0) {
                // Swap low and mid values
                let temp = nums[low];
                nums[low] = nums[mid];
                nums[mid] = temp;
                low++;
                mid++;
            }
            else if (nums[mid] === 1) {
                // No swap needed, just move past it
                mid++;
            }
            else if (nums[mid] === 2) {
                // Swap high and mid values
                let temp = nums[high];
                nums[high] = nums[mid];
                nums[mid] = temp;
                high--;
            }
        }
        return nums;
    }
}
