/**
 * 快速排序
 * 思想： 先取出一个基准值，然后再把其他的数与之相对比，小的放在左边的集合里，大的放在右边的集合里，
 *       递归不断重复该步骤，实现最高效率的quicksort
 */

Array.prototype.quickSort = function(){
    return quickSort(this);
}

function quickSort(arr){
    //如果无需排序，直接返回数组
    if(arr.length <= 1){
        return arr;
    }

    var baseIndex = Math.floor(arr.length/2),
        baseValue = arr.splice(baseIndex, 1),  //arr.splice()数组切割
        left = [],
        right = [];

    //实现快速排序
    for(var i = 0, l = arr.length; i < l; i++){
        if(arr[i] < baseValue){
            left.push(arr[i]);
        }else if(arr[i] > baseValue){
            right.push(arr[i]);
        }else{
            continue;
        }
    }

    //通过递归让子集不断排序，直到第一行递归结束条件结束
    return quickSort(left).concat(baseValue, quickSort(right));

}

console.log([5, 6, 7, 2, 3].quickSort());