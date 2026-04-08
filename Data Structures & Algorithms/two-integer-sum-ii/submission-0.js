class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;
        while (numbers[right] + numbers[left] !== target) {
            if (numbers[right] + numbers[left] < target) {
                left++;
                continue;
            }
            right--
        }
        return [left+1, right+1]
    }
}
