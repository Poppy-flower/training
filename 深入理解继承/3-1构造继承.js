/**
 * 构造继承
 * 核心： 使用父类的构造函数来增强子类实例，等于是复制父类的实例属性给子类
 */


//创建父类
function Animal(name){
    this.name = name;

    this.sleep = function(){
        console.log(this.name + '正在睡觉！');
    }
}

//创建子类
function Cat(name){
    Animal.call(this);
    this.name = name || 'Tom';
}


//test code
var cat = new Cat();
console.log(cat.name);  //cat
console.log(cat.sleep());  //cat正在睡觉
console.log(cat.eat('fish'));  //cat正在吃fish
console.log(cat instanceof Animal);  //true
console.log(cat instanceof Cat);  //true

/**
 * 特点
 *  1、解决了原型链继承存在的子类实例共享父类引用的问题
 *  2、创建子类实例时，可以传参
 *  3、可以实现多继承，（call多个父类对象）
 * 缺点
 *  1、实例并不是父类的实例，而是子类的实例
 *  2、只能继承父类的实例属性和方法，不能继承原型属性和方法
 *  3、无法实现函数复用，每个子类都有父类实例函数的副本，影响性能（！！！！缺点）
 *
 */




