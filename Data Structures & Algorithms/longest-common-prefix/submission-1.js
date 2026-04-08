class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if (strs.length === 0) return ''
        
        // prefix
        let output = strs[0];
        for (let i=0; i<strs.length; i++) {
            for (let j = 0; j<output.length; j++) {
                if (j>strs[i].length || strs[i][j] !== output[j]) {
                    output = output.slice(0, j)
                    break
                }
            }
        }
        return output;
    }
}
