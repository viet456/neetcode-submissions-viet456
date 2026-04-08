class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        nums.forEach((num, i) => {
            nums.push(nums[i])
        })
        return nums
    }
}
