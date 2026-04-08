class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let seen = new Map();
        
        for (let [index, number] of nums.entries()) {
            if (seen.has(number) && (index - seen.get(number)) <= k) {
                return true;
            } else {
                seen.set(number, index)
            }
        }
        return false
    }
}
