class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // charArray:[strings]

        let strMatches = new Map()
        for (let [i, str] of strs.entries()) {
            let charArray = new Array(26).fill(0)

            for (let char of str) {
                let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
                charArray[index] = charArray[index] + 1;
            }
            // Convert array to string to be used as key
            let strKey = charArray.toString()

            if (!strMatches.has(strKey)) {
                strMatches.set(strKey, []);
            }

            strMatches.get(strKey).push(str)
        }
        return Array.from(strMatches.values())
    }
}
