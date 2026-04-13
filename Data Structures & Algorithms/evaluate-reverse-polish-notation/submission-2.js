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
                stack.push(Math.trunc(
                    (1/stack.pop())*stack.pop()
                ))
            } else {
                stack.push(parseInt(token))
            }
        }
        return stack[0];
    }
}
