class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq = new Map();
        for (let i = 0; i < nums.length; i++) {
            // num:freq
            freq.set(nums[i], (freq.get(nums[i]) || 0 )+ 1);
        };

        let buckets = new Array(nums.length + 1).fill(0).map(() => []);
        // freq:num
        for (let [num, f] of freq) {
            buckets[f].push(num)
        }
        let right = buckets.length-1;
        let ans = [];
        while (ans.length < k) {
            if (buckets[right].length > 0) {
                // Push the whole array with a spread...
                ans.push(...buckets[right])
            }
            right--
        }
        return ans
    }
}
