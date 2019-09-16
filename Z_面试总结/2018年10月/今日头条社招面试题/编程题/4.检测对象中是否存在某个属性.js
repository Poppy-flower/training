

//1.使用in关键字，自有属性和继承属性均可判断
var obj = {
    x: 1
};

console.log('x' in obj);  //true,自有属性
console.log('y' in obj);  //false
console.log('toString' in obj);  //true，继承属性

//2.使用hasOwnProperty()方法，只能判断自有属性
var obj1 = {
    x: 1
};
console.log(obj1.hasOwnProperty('x')); //true
console.log(obj1.hasOwnProperty('toString')); //false,不是自有属性

//3.用undefined判断，自有属性和继承属性均可判断,如果本身属性值是undefined，这个方法会不正确
var obj2 = {
    x: 1
};
console.log(obj2.x !== undefined);  //true
console.log(obj2.y !== undefined);  //false
console.log(obj2.toString !== undefined);  //true
//例如：
var obj3 = {
    x: undefined
};
console.log(obj3.x !== undefined); //实际返回false,   应该返回true


//4.在条件语句中直接判断
var obj4 = {
    x: 1
};
function doSomething(){
    console.log('doSomething......');
}
if(obj4.x){
    doSomething();
};

