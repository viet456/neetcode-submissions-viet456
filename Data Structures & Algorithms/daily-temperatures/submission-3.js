class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = new Array(temperatures.length).fill(0)
        let stack = []; // Holds indices of cold days awaiting a warmer one
        for (let i = 0; i < temperatures.length; i++) {
            let currentTemp = temperatures[i];
            // While we have a temp queue 
            // AND current temp is warmer than the top of the stack
            while (stack.length > 0 && (currentTemp > temperatures[stack[stack.length - 1]])) {
                let index = stack.pop(); // Remove top of the stack
                res[index] = i - index;
            }
            stack.push(i);
        }
        return res
    }
}
