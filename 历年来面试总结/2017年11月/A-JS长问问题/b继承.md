javascript继承的6种方法

1，原型链继承

2，借用构造函数继承

3，组合继承(原型+借用构造)

4，原型式继承

5，寄生式继承

6，寄生组合式继承


继承方式及其优缺点

    原型链继承的缺点

一是字面量重写原型会中断关系，使用引用类型的原型，并且子类型还无法给超类型传递参数。

    借用构造函数（类式继承）

借用构造函数虽然解决了刚才两种问题，但没有原型，则复用无从谈起。所以我们需要原型链+借用构造函数的模式，这种模式称为组合继承

    组合式继承

组合式继承是比较常用的一种继承方法，其背后的思路是 使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承。这样，既通过在原型上定义方法实现了函数复用，又保证每个实例都有它自己的属性。



原型继承方法：

	假设有一个ClassA和ClassB，ClassB想继承ClassA
	首先要在ClassA的构造函数里定义属性，在ClassA的原型里定义方法：

	function ClassA() {
	    this.color = sColor;
	}

	ClassA.prototype.sayColor = function () {
	    alert(this.color);
	};

	然后在ClassB的构造函数中使用ClassA.call(this)来继承ClassA中的属性：

	function ClassB() {
	    ClassA.call(this);
	} 

	再用ClassB.prototype等于ClassA的一个实例对象来继承ClassA中的方法：

	ClassB.prototype = new ClassA(); 
	ClassB.prototype.constructor = ClassB;