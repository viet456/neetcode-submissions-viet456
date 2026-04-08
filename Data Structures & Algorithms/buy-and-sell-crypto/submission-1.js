class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let minPrice = Infinity;
        for (let number in prices) {
            if (prices[number] < minPrice) {
                minPrice = prices[number]
            }
            if (prices[number] - minPrice > maxProfit) {
                maxProfit = prices[number] - minPrice;
            }
        }
        return maxProfit
    }
}
