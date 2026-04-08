class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        let sCount = new Array(26).fill(0)
        let tCount = new Array(26).fill(0);

        for (let char of s) {
            sCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        for (let char of t) {
            tCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
        }
        for (let count in sCount) {
            if (sCount[count] !== tCount[count]) return false;
        }
        return true;
    }
}
