/**
 * 最少硬币找零问题
 * 问题描述：
 *     给出要找零的钱数，给出可用硬币的面额[d1,d2,,d3...]以及数量
 *     找到所需的最少硬币的个数
 * @param coins
 * @constructor
 */



function MinCoinChange(coins){
    this.coins = coins;
    var cache = {};

    this.makeChange = function(amount){
        var me = this;
        if(!amount){
            return [];
        }

        if(cache[amount]){
            return cache[amount];
        }

        var min = [], newMin, newAmount;
        for(var i=0; i<coins.length; i++){
            var coin = coins[i];
            newAmount = amount - coin;

            if(newAmount >= 0){
                newMin = me.makeChange(newAmount);
            }
            if(
                newAmount >= 0 &&
                (newMin.length < min.length-1 || !min.length)
                && (newMin.length || !newAmount)
            ){
                min = [coin].concat(newMin);
            }
        }
        return (cache[amount] = min);
    };
}