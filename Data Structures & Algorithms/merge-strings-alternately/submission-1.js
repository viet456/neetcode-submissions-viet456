class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let word1Length = word1.length;
        let word2Length = word2.length;
        let index = 0;
        let ans = new Array(word1Length + word2Length)
        for (let i=0; i<Math.max(word1Length, word2Length); i++) {
            if (word1[i]) ans[index++] = word1[i];
            if (word2[i]) ans[index++] = word2[i];
        }
        return ans.join('')
    }
}
