class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = new Map();
        let l = 0;
        let maxFreq = 0;
        let maxLen=1
        for (let r=0; r<s.length; r++) {
            let char = s[r];
            count.set(char, (count.get(char) || 0) +1);
            maxFreq = Math.max(maxFreq, count.get(char));
            let windowLen = r-l+1;
            if (windowLen-maxFreq > k) {
                let leftChar = s[l];
                count.set(leftChar, count.get(leftChar) -1);
                l++;
            }
            maxLen=Math.max(maxLen, r-l+1)
        }
        return maxLen
    }
}
