/**
 * 该方法的功能是实现一个OOP中的Class。
 * 该方法可以传入两个参数，一个是Parent Class，另外一个就是Class自身的配置。
 * 第一个参数为可选参数，在不使用此参数的时候，则类似于下面代码中的Pet的定义。
 * 如果使用了第一个参数，则类似于下面代码中的Dog的定义。
 *
 * 如果用户定义了Parent Class，则返回的Function需要增加一个属性$super，指向Parent Class。
 *
 * @param parent 可选参数，如果第一个参数不为Function，则相当于用户未指定Parent Class。
 * @param options Class本身的配置。
 * @returns {Function} 无论如何都需要返回一个Function。
 */
var Class = function(parent, options) {
  var extend = function(target, obj){//合并对象的函数
    for(var p in obj){
      target[p] = obj[p];
    }
  };
  var Fn;//要返回的类
  if(typeof parent !== 'function'){//如果第一个参数不是类，比如Pet
    Fn = parent.constructor;//Fn类的构造函数直接就是parent参数的constructor
    extend(Fn.prototype, parent);//将parent参数中的方法合并到Fn的构造函数中
  }else{//如果第一个参数是类，比如Dog
    Fn = options.constructor;//Fn类的构造函数直接就是options参数的constructor
    Fn.$super = parent;//添加Fn类的静态属性$super指向父类parent
    Fn.prototype = new parent();//继承父类中的方法
    extend(Fn.prototype, options)//将子类中的方法合并到Fn的构造函数中
  }
  return Fn;
};

var Pet = Class({
  constructor: function(name, age) {
    this.name = name;
    this.age = age;
  },
  eat: function() {
    console.log('eating');
  },
  sleep: function() {
    console.log('sleeping');
  },
  toString: function() {
    return '[' + this.name + ',' + this.age + ']';
  }
});

var Dog = Class(Pet, {
  constructor: function() {
    Dog.$super.apply(this, arguments);
  },
  bark: function() {
    console.log('barking');
  }
});

var dog = new Dog('a stupid dog', 10);
console.log(dog instanceof Pet); // true
dog.eat(); // eating
dog.bark(); // barking
dog.sleep(); // sleeping

console.log(dog.toString()); // [a stupid dog,10]
