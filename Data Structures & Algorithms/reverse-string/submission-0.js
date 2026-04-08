class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let temp = ''
        let right=s.length-1;
        for (let i=0; i<Math.floor(s.length/2); i++) {
            temp = s[right];
            s[right]=s[i];
            s[i]=temp; 
            right--;
        }
        return s
    }
}
