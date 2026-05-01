class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq = new Map();

        for (let num of nums) {
            // num:freq
            freq.set(num, (freq.get(num) || 0) + 1);
        }

        let buckets = new Array(nums.length + 1).fill(0).map(() => []);

        for (let [num, count] of freq) {
            buckets[count].push(num)
        }
        let ans = [];
        let right = buckets.length - 1
        while (ans.length < k) {
            if (buckets[right].length > 0) {
                ans.push(...buckets[right])
            }
            right--;
        }
        return ans
    }
}
