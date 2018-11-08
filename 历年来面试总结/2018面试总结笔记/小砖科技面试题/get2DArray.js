/**
 * 题目描述： 请实现输入
 * data = [
     {a: 5, b: 200},
     {a: 1, b: 500},
     {a: 1, b: 300},
     {a: 2, b: 100},
     {a: 5, b: 230}
 ];
 得到输出结果是：
 [
    [{a: 1, b: 300},{a: 1, b: 500}],
    [{a: 2, b: 100}],
    [{a: 5, b: 200},{a: 5, b: 230}]
 ];


 * @param dataArr
 * @returns {Array}
 */


function get2DArray(dataArr){
    dataArr.sort(function(obj1, obj2){
        //实现既按照a属性也按照b属性排序 方案1
        // if(obj1['a'] === obj2['a']){
        //     return obj1['b'] - obj2['b'];
        // }
        // return obj1['a'] - obj2['a'];

        //实现既按照a属性也按照b属性排序  方案2
        return (obj1['a'] - obj2['a']) || (obj1['b'] - obj2['b']);
    });

    var result = [],pushArr = [], j = 0;
    for(var i =0, l= dataArr.length; i < l; i++){


        if(pushArr[0]){
            if(pushArr[0]['a'] === dataArr[i]['a']){
                pushArr.push(dataArr[i]);
            }else {
                result.push(pushArr);
                pushArr = [dataArr[i]];
            }
        }else{
            pushArr.push(dataArr[i]);
        }

    }
    result.push(pushArr);


    // result.map(function(arr){
    //     return arr.sort(function(obj1, obj2){
    //         return obj1['b'] - obj2['b'];
    //     });
    // });

    return result;
}

//test code
var data = [
    {a: 5, b: 200},
    {a: 1, b: 500},
    {a: 1, b: 300},
    {a: 2, b: 100},
    {a: 5, b: 230}
];
console.log(get2DArray(data));