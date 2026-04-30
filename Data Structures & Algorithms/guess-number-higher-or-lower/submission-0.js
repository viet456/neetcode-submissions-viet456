/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let left = 0;
        let right = n;
        while (true) {
            let m = Math.floor((left + right) / 2);
            if (guess(m) === 0) {
                return m;
            } else if (guess(m) === -1) {
                right = m - 1;
            } else if (guess(m) === 1) {
                left = m + 1
            }
        }
    }
}
