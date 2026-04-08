class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        let right = s.length-1;
        for (let left = 0; left < Math.floor(s.length/2); left++) {
            if (s[left] === s[right]) {
                right--;
                continue;
            }
            return false;
        }
        return true;
    }
}
