class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let ans = new Map();
        for (let i=0; i<strs.length; i++) {
            let counts = new Array(26).fill(0);
            for (const c of strs[i]) {
                let index = c.charCodeAt(0) - 'a'.charCodeAt(0);
                counts[index]++;
            };
            let key = counts.join(',');
            if (!ans.has(key)) {
                ans.set(key, [])
            }
            ans.get(key).push(strs[i])
        }
        return Array.from(ans.values())
    }
}
