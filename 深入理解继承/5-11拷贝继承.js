/**
 * 拷贝继承
 *
 */

//father
function Animal(name){
    this.name = name;
    this.sleep = function(){
        console.log(`${this.name} is sleeping!`);
    };
}

//child
function Cat(name){
    var animal = new Animal();
    for(var p in animal){
        Cat.prototype[p] = animal[p];
    }
    Cat.prototype.name = name || 'Tom';
}

// Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal);
console.log(cat instanceof Cat);

/**
 * 特点
 *  1、支持多继承
 * 缺点
 *  1、效率较低，内存占用高（因为要拷贝父类的属性）（～～～～～～～～～～缺点！！）
 *  2、无法获取父类不可枚举的方法（不可枚举方法，不可用for in访问到）
 */


