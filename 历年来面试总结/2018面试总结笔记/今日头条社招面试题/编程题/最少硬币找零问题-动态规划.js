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
    var cache = {};  //存所有情况的最小硬币找零问题

    this.makeChange = function(amount){
        var me = this;
        if(!amount){  //传入的钱数为0，返回空
            return [];
        }

        if(cache[amount]){   //传入的钱数，已经计算过了最少硬币数，因为存在cache里了，直接返回
            return cache[amount];
        }

        var min = [], newMin, newAmount;  //最少硬币的数组，剩余钱数的最少硬币数组，剩余的要找的钱数
        for(var i=0; i<coins.length; i++){
            var coin = coins[i];
            newAmount = amount - coin;

            if(newAmount >= 0){
                newMin = me.makeChange(newAmount);  //剩余钱数的最少硬币数
            }

            if(
                newAmount >= 0 &&
                (newMin.length < min.length-1 || !min.length)
                && (newMin.length || !newAmount)
            ){
                min = [coin].concat(newMin);
            }
        }
        console.log(cache);
        return (cache[amount] = min);
    };
}

var minCoinChange = new MinCoinChange([1, 5, 10, 25]);
console.log(minCoinChange.makeChange(36));