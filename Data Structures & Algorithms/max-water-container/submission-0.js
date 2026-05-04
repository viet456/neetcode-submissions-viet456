class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0, right = heights.length - 1;
        let max = 0;
        while (left < right) {
            let currSize = Math.min(heights[left], heights[right]) * (right - left);
            max = Math.max(max, currSize);
            if (heights[right] < heights[left]) {
                right--;
            } else {
                left++;
            }
        }
        return max
    }
}
