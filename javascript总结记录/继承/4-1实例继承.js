/**
 * 实例继承
 * 核心： 为父类添加新特性，作为子类的实例返回
 */


//实例继承
//father
function Animal(name){
    this.name = name;

    this.sleep = function(){
        console.log(`${this.name}正在睡觉！`);
    }
}

//child
function Cat(name){
    var instance = new Animal();
    instance.name = name || 'Tom';
    return instance;
}

// Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); // false

/**
 * 特点：
 * 1、不限制使用的方式，可以是new Cat() ,也可以是Cat(),返回的对象具有相同的效果
 *      new 子类()  和 子类()
 *
 * 缺点：
 * 1、实例是父类的实例，不是子类的实例
 * 2、不支持多继承
 *
 */


