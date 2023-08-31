/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.


*/

var maxProfit = function(prices) {
    let min = 0
    let max = 0
    let currentProfit = 0

    for(let i = 0; i < prices.length; i++){
        if(prices[i] > prices[max]){
            max = i
            if(prices[max] - prices[min] > currentProfit){
                currentProfit = prices[max] - prices[min]
            }
        } else if(prices[i] < prices[min]){
            min = i;
            max = i
        }
    }

    return currentProfit
/*
Runtime: 89 ms, faster than 78.99% of JavaScript online submissions for Best Time to Buy and Sell Stock.
Memory Usage: 51.7 MB, less than 74.47% of JavaScript online submissions for Best Time to Buy and Sell Stock.
*/
    
};

