/**
 * 质数： 质数也叫做素数，有无限个
 * 定义： 大于1，除了1和本身之外没有别的y因数
 * 1不是质数
 * @param n
 */


//打印 1-100 范围内的质数
var i =2;  //定义变量 i = 2,从2开始遍历
while(i <= 100){
    var Default = true;  //声明变量default，默认是质数
    var j =2;  //声明变量j
    while(j < i){
        if(i % j == 0){
            Default = false;
        }
        j++;
    }

    if(Default){
        console.log(`${i}是质数！`);
    }

    i++;
}


console.log('-----------------------------------------');

//打印小于某个数的质数
function printZhiShu(n){
    var i =2;  //定义变量 i = 2,从2开始遍历
    while(i < n){
        var Default = true;  //声明变量default，默认是质数
        var j =2;  //声明变量j
        while(j < i){
            if(i % j == 0){
                Default = false;
            }
            j++;
        }

        if(Default){
            console.log(`${i}是质数！`);
        }

        i++;
    }
}

printZhiShu(7);

