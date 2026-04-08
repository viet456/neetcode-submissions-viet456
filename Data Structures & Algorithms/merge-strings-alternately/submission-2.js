class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let i = 0;
        let j = 0;
        let ans = [];
        while (i < word1.length || j < word2.length) {
            if (i < word1.length) ans.push(word1[i++]);
            if (j < word2.length) ans.push(word2[j++]);
        }
        return ans.join('');
    }
}
