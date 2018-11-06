function Animal(name){
    this.name = name || 'animal';
    this.sleep = function(){
        console.log(`${this.name} is sleeping!`);
    };
    //引用属性
    this.features = [];
}

function Cat(name){

}

Cat.prototype = new Animal();
var tom = new Cat('Tom');
var kissy = new Cat('Kissy');


console.log(tom.name);  //Tom
console.log(kissy.name);  //Kissy
console.log(tom.features);  //[]
console.log(kissy.features);  //[]


tom.name = 'Tom-New Name';
tom.features.push('eat');

//针对父类实例   值类型成员的更改，不影响
console.log(tom.name);   // "Tom-New Name"
console.log(kissy.name);   // "Animal"

//针对父类实例   引用类型成员的更改，会通过影响其他子类实例
console.log(tom.features); // ['eat']
console.log(kissy.features); // ['eat']


/**
 * 原因分析：
 *  关键点：属性查找过程
 *  执行tom.features.push，首先找tom对象的实例属性（找不到），
    那么去原型对象中找，也就是Animal的实例。发现有，那么就直接在这个对象的
    features属性中插入值。
    在console.log(kissy.features)的时候。同上，kissy实例上没有，那么去原型上找。
    刚好原型上有，就直接返回，但是注意，这个原型对象中features属性值已经变化了。
 *
 */

