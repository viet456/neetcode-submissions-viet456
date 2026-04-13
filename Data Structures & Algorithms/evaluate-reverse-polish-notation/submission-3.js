class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for (const token of tokens) {
            if (token === '+') {
                stack.push(stack.pop()+stack.pop())
            } else if (token === '-') {
                stack.push(-(stack.pop())+stack.pop())
            } else if (token === '*') {
                stack.push(stack.pop()*stack.pop())
            } else if (token === '/') {
                let divisor = stack.pop();
                let dividend = stack.pop();
                stack.push(Math.trunc(dividend / divisor));
            } else {
                stack.push(parseInt(token))
            }
        }
        return stack[0];
    }
}
