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
            if (closer[c]) { // Resolves true if we're on a closer
                if (stack.length > 0 && stack[stack.length - 1] === closer[c]) { // Check that last stack item is the opener by accesing its map value (opener)
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                // Only pushes openers
                stack.push(c)
            }
        }
        // Stack is empty if we've the right number of closers
        return stack.length === 0;
    }
}
