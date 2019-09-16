/**
 * 寄生组合继承
 * 核心：通过寄生的方式，砍掉父类的实例属性，这样在调用两次父类的构造的时候，就不会初始化两次实例方法和属性，避免原型和构造组合继承的缺点
 */
//父类
function Animal(name){
    this.name = name;

    this.sleep = function(){
        console.log(`${this.name} is sleeping!`);
    };
}

//子类
function Cat(name){
    Animal.call(this);
    this.name = name || 'Tom';
}

(function(){
    var Super = function(){};  //创建一个没有实例方法的类
    Super.prototype = Animal.prototype;
    Cat.prototype = new Super();  //将实例作为子类的原型
})();

Cat.prototype.constructor = Cat; // 需要修复下构造函数

// Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal);
console.log(cat instanceof Cat);


/**
 * 特点：
 * 1、 堪称完美
 * 缺点：
 * 1、实现复杂
 */

