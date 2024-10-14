/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let max_profit = 0;
    // giá thấp nhất là ngày đầu
    let min_price = prices[0];
    for(let i=1;i<prices.length;i++){
        if(prices[i]< min_price){
            min_price=prices[i];
        }
        else{
            profit= prices[i]-min_price;
            if (profit>max_profit){
                max_profit=profit
            }
        }
    }
    return max_profit;
       

};