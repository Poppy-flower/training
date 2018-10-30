/**
 * @param {number} left
 * @param {number} right
 * @returns {number}
 * @constructor
 */


//对于基本类型的批注是number, bool和string。而弱或动态类型的结构则是any类型。
function Add(left: number, right: number): number {
    return left + right;
}

function area(shape: string, width: number, height: number){
    var area = width * height;
    return `I'm  ${shape}, my area is ${area}!`
}

document.body.innerHTML = area('rectangle', 30, 15);
