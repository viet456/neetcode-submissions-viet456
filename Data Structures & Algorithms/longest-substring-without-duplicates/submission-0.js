class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0
        let seen = new Map()
        let maxLen = 0;
        for (let r = 0; r < s.length; r++) {
            let char = s[r]
            if (seen.has(char) && seen.get(char) >= l) {
                l = seen.get(char) + 1;
            }
            maxLen = Math.max(maxLen, r-l+1)
            seen.set(char, r)
        }
        return maxLen
    }
}
