class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let ans = [];

        let longest = (word1.length >= word2.length) ? word1 : word2;

        for (let i=0; i<longest.length; i++) {
            ans.push(word1[i]);
            if (word2[i]) {

            
            ans.push(word2[i]);
            }
        }
        return ans.join('')
    }
}
