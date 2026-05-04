class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // Last in/first out
        let stack = [];
        let closer = {
            ')': '(',
            ']': '[',
            '}': '{',
        };

        for (let c of s) {
            // If closer, check if previous is its opener
            if (closer[c]) {
                if (stack.length > 0 && stack[stack.length - 1] === closer[c]) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(c)
            }
        }

        return stack.length === 0;
    }
}
