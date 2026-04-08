class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let map = {
            '(':')',
            '[':']',
            '{':'}'
        }
        for (let char of s) {
            if (map[char]) stack.push(char);
            else {
                let lastOpener = stack.pop();
                if (map[lastOpener] !== char) {
                    return false
                }
            }
        }
        return stack.length === 0
    }
}
