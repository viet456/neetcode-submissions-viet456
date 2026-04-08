class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */

    
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;
        let targetMap = new Map();
        let windowMap = new Map();
        for (let char of s1) {
            targetMap.set(char, (targetMap.get(char) || 0) + 1);
        }
        for (let i = 0; i < s1.length; i++) {
            let char = s2[i];
            windowMap.set(char, (windowMap.get(char) || 0) + 1);
        }
        let l = 0;
        for (let r = s1.length; r < s2.length; r++) {
            if (mapsMatch(targetMap, windowMap)) return true;
            let addChar = s2[r];
            windowMap.set(addChar, (windowMap.get(addChar) || 0) + 1);
            let removeChar = s2[l];
            windowMap.set(removeChar, windowMap.get(removeChar) - 1);
            if (windowMap.get(removeChar) === 0) {
                windowMap.delete(removeChar);
            }

            l++;
            
        }
        return mapsMatch(targetMap, windowMap);
        
    }
}

function mapsMatch(map1, map2) {
        if (map1.size !== map2.size) return false;
        for (let [key, val] of map1) {
            if (map2.get(key) !== val) return false;
        }
        return true;
    }
