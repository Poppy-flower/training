let与const 关键字

    可以把let看成var，只是它定义的变量被限定在了特定范围内才能使用，而离开这个范围则无效。const则很直观，用来定义常量，即无法被更改值的变量。


for of 值遍历

    我们都知道for in 循环用于遍历数组，类数组或对象，ES6中新引入的for of循环功能相似，不同的是每次循环它提供的不是序号而是值。

Promises

    Promises是处理异步操作的一种模式，之前在很多三方库中有实现，比如jQuery的deferred 对象。当你发起一个异步请求，并绑定了.when(), .done()等事件处理程序时，其实就是在应用promise模式。


箭头函数

    它简化了函数的书写。操作符左边为输入的参数，而右边则是进行的操作以及返回的值Inputs=>outputs。

    我们知道在JS中回调是经常的事，而一般回调又以匿名函数的形式出现，每次都需要写一个function，甚是繁琐。当引入箭头操作符后可以方便地写回调了。请看下面的例子。
    默认指向在定义它时,它所处的对象,而不是执行时的对象, 定义它的时候,可能环境是window


类的支持

    ES6中添加了对类的支持，引入了class关键字（其实class在JavaScript中一直是保留字，目的就是考虑到可能在以后的新版本中会用到，现在终于派上用场了）。JS本身就是面向对象的，ES6中提供的类实际上只是JS原型模式的包装。现在提供原生的class支持后，对象的创建，继承更加直观了，并且父类方法的调用，实例化，静态方法和构造函数等概念都更加形象化。

    下面代码展示了类在ES6中的使用。再次啰嗦一句，你可以将代码贴到traceur自己查看运行结果。



增强的对象字面量

    对象字面量被增强了，写法更加简洁与灵活，同时在定义对象的时候能够做的事情更多了。具体表现在：

        可以在对象字面量里面定义原型
        定义方法可以不用function关键字
        直接调用父类方法

    这样一来，对象字面量与前面提到的类概念更加吻合，在编写面向对象的JavaScript时更加轻松方便了。



 
字符串模板

    字符串模板相对简单易懂些。ES6中允许使用反引号 '` '来创建字符串，此种方法创建的字符串里面可以包含由美元符号加花括号包裹的变量${vraible}。如果你使用过像C#等后端强类型语言的话，对此功能应该不会陌生。




解构

    自动解析数组或对象中的值。比如若一个函数要返回多个值，常规的做法是返回一个对象，将每个值做为这个对象的属性返回。但在ES6中，利用解构这一特性，可以直接返回一个数组，然后数组中的值会自动被解析到对应接收该值的变量中。



参数默认值，不定参数，拓展参数

    现在可以在定义函数的时候指定参数的默认值了，而不用像以前那样通过逻辑或操作符来达到目的了。



不定参数

    不定参数是在函数中使用命名参数同时接收不定数量的未命名参数。这只是一种语法糖，在以前的JavaScript代码中我们可以通过arguments变量来达到这一目的。不定参数的格式是三个句点后跟代表所有不定参数的变量名。比如下面这个例子中，…x代表了所有传入add函数的参数。


 
拓展参数

    拓展参数则是另一种形式的语法糖，它允许传递数组或者类数组直接做为函数的参数而不用通过apply。


注意，此功能google traceur并未实现，所以无法模拟调试,下面有些功能也是如此
iterator, generator

这一部分的内容有点生涩，详情可以参见这里。以下是些基本概念。

    iterator:它是这么一个对象，拥有一个next方法，这个方法返回一个对象{done,value}，这个对象包含两个属性，一个布尔类型的done和包含任意值的value
    iterable: 这是这么一个对象，拥有一个obj[@@iterator]方法，这个方法返回一个iterator
    generator: 它是一种特殊的iterator。反的next方法可以接收一个参数并且返回值取决与它的构造函数（generator function(){} ） generator同时拥有一个throw方法
    generator 函数: 即generator的构造函数。此函数内可以使用yield关键字。在yield出现的地方可以通过generator的next或throw方法向外界传递值。generator 函数是通过function*来声明的
    yield 关键字：它可以暂停函数的执行，随后可以再进进入函数继续执行

模块

    在ES6标准中，JavaScript原生支持module了。这种将JS代码分割成不同功能的小块进行模块化的概念是在一些三方规范中流行起来的，比如CommonJS和AMD模式。

    将不同功能的代码分别写在不同文件中，各模块只需导出公共接口部分，然后通过模块的导入的方式可以在其他地方使用。下面的例子来自tutsplus:



Map，Set 和 WeakMap，WeakSet

    这些是新加的集合类型，提供了更加方便的获取属性值的方法，不用像以前一样用hasOwnProperty来检查某个属性是属于原型链上的呢还是当前对象的。同时，在进行属性值添加与获取时有专门的get，set 方法。



有时候我们会把对象作为一个对象的键用来存放属性值，普通集合类型比如简单对象会阻止垃圾回收器对这些作为属性键存在的对象的回收，有造成内存泄漏的危险。而WeakMap,WeakSet则更加安全些，这些作为属性键的对象如果没有别的变量在引用它们，则会被回收释放掉，具体还看下面的例子。

 
Proxies

Proxy可以监听对象身上发生了什么事情，并在这些事情发生后执行一些相应的操作。一下子让我们对一个对象有了很强的追踪能力，同时在数据绑定方面也很有用处。

以下例子借用自这里。

//定义被侦听的目标对象
var engineer = { name: 'Joe Sixpack', salary: 50 };
//定义处理程序
var interceptor = {
  set: function (receiver, property, value) {
    console.log(property, 'is changed to', value);
    receiver[property] = value;
  }
};
//创建代理以进行侦听
engineer = Proxy(engineer, interceptor);
//做一些改动来触发代理
engineer.salary = 60;//控制台输出：salary is changed to 60

上面代码我已加了注释，这里进一步解释。对于处理程序，是在被侦听的对象身上发生了相应事件之后，处理程序里面的方法就会被调用，上面例子中我们设置了set的处理函数，表明，如果我们侦听的对象的属性被更改，也就是被set了，那这个处理程序就会被调用，同时通过参数能够得知是哪个属性被更改，更改为了什么值。
Symbols

我们知道对象其实是键值对的集合，而键通常来说是字符串。而现在除了字符串外，我们还可以用symbol这种值来做为对象的键。Symbol是一种基本类型，像数字，字符串还有布尔一样，它不是一个对象。Symbol 通过调用symbol函数产生，它接收一个可选的名字参数，该函数返回的symbol是唯一的。之后就可以用这个返回值做为对象的键了。Symbol还可以用来创建私有属性，外部无法直接访问由symbol做为键的属性值。

以下例子来自es6features

(function() {

  // 创建symbol
  var key = Symbol("key");

  function MyClass(privateData) {
    this[key] = privateData;
  }

  MyClass.prototype = {
    doStuff: function() {
      ... this[key] ...
    }
  };

})();

var c = new MyClass("hello")
c["key"] === undefined//无法访问该属性，因为是私有的

 
Math，Number，String，Object 的新API

对Math,Number,String还有Object等添加了许多新的API。下面代码同样来自es6features，对这些新API进行了简单展示。

Number.EPSILON
Number.isInteger(Infinity) // false
Number.isNaN("NaN") // false

Math.acosh(3) // 1.762747174039086
Math.hypot(3, 4) // 5
Math.imul(Math.pow(2, 32) - 1, Math.pow(2, 32) - 2) // 2

"abcde".contains("cd") // true
"abc".repeat(3) // "abcabcabc"

Array.from(document.querySelectorAll('*')) // Returns a real Array
Array.of(1, 2, 3) // Similar to new Array(...), but without special one-arg behavior
[0, 0, 0].fill(7, 1) // [0,7,7]
[1,2,3].findIndex(x => x == 2) // 1
["a", "b", "c"].entries() // iterator [0, "a"], [1,"b"], [2,"c"]
["a", "b", "c"].keys() // iterator 0, 1, 2
["a", "b", "c"].values() // iterator "a", "b", "c"

Object.assign(Point, { origin: new Point(0,0) })

 


