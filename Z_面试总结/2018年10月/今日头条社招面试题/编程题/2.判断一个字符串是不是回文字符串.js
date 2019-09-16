/**
 * 题目描述：
 * 判断输入的字符串是不是回文字符串
 *
 *
 * 回文： 如果一个字符串反转过来，能和原字符完全相等，那么他就是回文字符串
 */

function isPalindrome(line){
    return line === line.split('').reverse().join('');
}

console.log(isPalindrome('12321'));
console.log(isPalindrome('abcba'));
console.log(isPalindrome('aaaacccc'));