class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let ans = [];
        let longest = Math.max(word1.length, word2.length);

        for (let i = 0; i < longest; i++) {
            if (i < word1.length) ans.push(word1[i]);
            if (i < word2.length) ans.push(word2[i]);
        }

        return ans.join('');
    }
}
