class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let l = 0;
        let currentSum = 0
        let minLen = Infinity;
        for (let r = 0; r < nums.length; r++) {
            currentSum += nums[r];
            
            while (currentSum >= target) {
                minLen = Math.min(minLen, r - l + 1);
                currentSum -= nums[l];
                l++;
            }
        }
        return minLen === Infinity ? 0 : minLen;
    }
}
