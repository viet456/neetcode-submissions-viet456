class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let matches = [];
        let map = new Map()
        for (let str of strs) {
            let counts = new Array(26).fill(0);
            for (let char of str) {
                let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
                counts[index]++;
            }
            let key = counts.join(',')
            matches = map.get(key) || []
            matches.push(str)
            map.set(key, matches)
        }
        return Array.from(map.values());
    }
}
