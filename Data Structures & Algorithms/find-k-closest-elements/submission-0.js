class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let left = 0;
        let right = arr.length - 1;
        let windowSize = right - left + 1;
        while (windowSize > k) {
            // true distance from x
            let leftDist = Math.abs(arr[left] - x);
            let rightDist = Math.abs(arr[right] - x);
            // left side is closer to x
            // bring in right side
            if (leftDist <= rightDist) {
                right--;
                windowSize--;
                // right side closer to x:
                // bring in left side
            } else if (rightDist < leftDist) {
                left++;
                windowSize--;
            }
        }
        return arr.slice(left, right + 1)
    }
}
