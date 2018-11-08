/**
 * 实现数字头尾反转，然后输出反转之后的数字，要求不能用string,array等方法
 * @param n
 * 例如： 输入98765， 输出 56789(五万六千七百八十九，不是五六七八九)
 */


function reverseNum(n){
    var s = 0;
    while(n !== 0){
        s = s*10 + n%10;
        n = Math.floor(n/10);
    }
    return s;
}
//test code
console.log(reverseNum(98765));


//如果可以用js，可以用
function getReverseNum(n){
    return (n+'').split('').reverse().join('') - 0;
}

//test code
console.log(getReverseNum(123456789));