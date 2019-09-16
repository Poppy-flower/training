/**
 * 判断日期有效性，输入（y, m, d）输出true or false
 * @param y
 * @param m
 * @param d
 */

function checkYear(y){
    return (y-0 >= 0);
}

function checkMonth(m){
    return (m-0 > 0) && (m-0 <= 12);
}



function checkOtherMonth(m, d){
    var m = m-0, d = d-0;
    if(m === 4 || m === 6 || m===9 || m===11){
        return (d > 0 && d <= 30);
    }else{
        return (d > 0 && d <= 31);
    }
}


function checkDay(y, m, d){
    if(y%4 === 0 && y%100  !== 0){   //闰年，能被4整除，且不能被100整除
        if(m-0 === 2){
            return (m-0 >0) && (m-0 <=29);
        }else{
            return checkOtherMonth(m, d);
        }
    }else{
        if(m-0 === 2){
            return (m-0 >0) && (m-0 <=28);
        }else{
            return checkOtherMonth(m, d);
        }
    }
}

//检查年月日输入是否有效
function checkDate(y, m, d){
    if(checkYear(y) && checkMonth(m) && checkDay(y, m, d)){
        return true;
    }
    return false;
}

//test code
console.log(checkDate(2006, 10, 31));   //true
