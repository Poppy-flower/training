/**
 * 题目描述：
 *      现在有一个字符串，你需要对字符串进行N次操作，每次操作给出两个数字（p, l）:表示当前字符串从下标p开始长度为l的子串;
 *      你要将这个子串左右翻转之后，插入子串原来位置的正后方，
 *      求最后得到的字符串是什么？
 *
 *      字符串的下标是从0开始的，你可以从样例中得到更多信息：
 *          每组测试用例仅包含一组数据，每组数据第一行为原来字符串，长度不超过10，仅包含大小写字符与数字。
 *          接下来会有一个数字n,表示n次操作；
 *          再接下来有n行，每行两个数字，表示每次操作的（p, l）
 *          保证输入的字符串一定合法，最后得到的字符串长度不超过1000
 *
 *      输出描述：
 *          输出一个字符串代表得到的字符串
 *      输入描述：
 *          ab
 *          2
 *          0 2
 *          1 3
 *      输出例子：
 *          abbaabb
 * @param string
 * @return string
 */

var input = 'ab\n2\n0 2\n1 3';

function reverscon(input){
    var input_array = input.split('\n');

    var nLine = 0;

    while(nLine < input_array.length){    //外层循环里面还套了里面的while,里面的执行完了nLine为4，所以不符合条件，就执行完毕了
        var line = input_array[nLine++].trim();  //存每行的字符串

        if(line === ''){  //处理多个回车空行用的
            continue;
        }

        var s = line;   //非空行的话表示有操作，用s表示一整行的字符串
        var n = +input_array[nLine++];  //n表示第2行的循环次数

        while(n--){
            var input_arrays = input_array[nLine++].trim().split(' ');  //操作行的p,l字符串 切割成数组
            var p = +input_arrays[0];  //(相当于把字符串转换成数字类型 p)
            var l = +input_arrays[1];  //(相当于把字符串转换成数字类型 p)


            //你的代码
            var substring = s.substring(p, p+l);
            substring = substring.split('').reverse().join('');

            //这一步需要一个变量保存,因为splice返回的是被删除的，连写会返回空
            var arrs = s.split('');
            arrs.splice(p+1, 0, substring);
            s = arrs.join('');
        }
    }
    console.log(s);
}

reverscon(input);