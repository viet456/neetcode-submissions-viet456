class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const ans = new Array(temperatures.length).fill(0);
        const stack = [];

        for (let i=0; i<temperatures.length; i++) {
            const t = temperatures[i];
            while (stack.length > 0 && t > temperatures[stack[stack.length - 1]]) {
                const prevIndex = stack.pop();
                ans[prevIndex] = i - prevIndex;
            }
            stack.push(i);
        }
        return ans
    }
}
