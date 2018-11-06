/**
 * 原型链和构造组合继承
 * 1. 通过调用父类构造，继承父类的属性，并且保留传参的优点
 * 2. 通过将父类的实例作为子类的原型，实现函数复用
 */

//father
function Animal(name){
    this.name = name;

    this.sleep = function(){
        console.log(`${this.name} is sleeping`);
    };
}

//child
function Cat(name){
    Animal.call(this);
    this.name = name || 'Tom';
}
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;  //组合继承也是需要修复构造函数指向的

// Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal);
console.log(cat instanceof Cat);

/**
 * 特点：
 *  1、弥补了构造继承的缺陷，既可以实现实例属性和方法继承，也可以实现原型里的属性和方法的继承；
 *  2、实例即是子类的实例，也是父类的实例
 *  3、不存在引用属性共享的问题
 *  4、可以传参
 *  5、函数可以复用
 * 缺点：
 *  1、调用了两次构造函数，生成了两份实例， 子类实例将子类原型上的那份屏蔽了
 */



