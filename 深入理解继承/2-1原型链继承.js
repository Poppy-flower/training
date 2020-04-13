//父类
function Animal(name){
    this.name = name;

    this.sleep = function(){
        console.log(`${this.name}正在睡觉`);
    }
}

Animal.prototype.eat = function(food){
    console.log(`${this.name}正在吃${food}`);
}


//子类
function Cat(){

}

Cat.prototype = new Animal();
Cat.prototype.name = 'cat';



//test code
var cat = new Cat();
console.log(cat.name);  //cat
console.log(cat.sleep());  //cat正在睡觉
console.log(cat.eat('fish'));  //cat正在吃fish
console.log(cat instanceof Animal);  //true
console.log(cat instanceof Cat);  //true


/**
 * 原型链继承的特点
 * 1 优点
 *     （1）非常纯粹的继承关系，var cat = new Cat();创建的实例cat,即是父类的实例，也是子类的实例
 *     （2）父类新增了原型方法 或者 原型属性，子类都能访问的到。
 *     （3）简单，易于实现
 * 2 缺点
 *      (1) 要想为子类 新增属性和方法，就必须在 new Animal() 这样的语句之后执行，不能放到构造器中
 *      (2) 无法实现多继承
 *      (3) 创建子类实例时，无法向父类构造函数传参（～～～～～～～致命缺点）
 *      (4) 来自原型对象的所有属性被所有实例共享（～～～～～～～致命缺点）
 */
