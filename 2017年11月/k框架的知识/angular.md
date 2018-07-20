angular.js:

	四大核心特性：
	1、MVC，module，view，controller
	2、模块化和依赖注入，provider
	3、双向数据绑定，
	4、指令 AEMC（Attribute（属性） Element（元素,标签） Comment（注释） Class）
	不写死的数据在controller里
 
angular适合写什么样的程序？
	不刷新页面的，
 
单项数据绑定是模板和数据进行一次合并，然后显示在view里面
双向数据绑定：view中的数据改，model中的数据也改变，反过来也是，而不需要写dom操作(MVVM)。视图和数据是对应的，
	<!DOCTYPE html>
	<html lang="en" ng-app>
		<head>
			<meta charset="UTF-8">
			<title>Document</title>
		</head>
		<body>
			<div ng-controller="aaa">
			<input type="text" ng-model="name">
			<div id="div1">
				{{name}}
			</div>
			</div>
			<script src="angular-1.3.0.js"></script>
			<script>
				function aaa($scope){
				$scope.name = 'wangwu123';//这是input的默认字节
				localStorage.name = $scope.name;
				setTimeout(function(){
				alert(localStorage.name);
				},2000);
				}
			</script>
		</body>
	</html>
MVC只是手段，目标是模块化和复用(很多逻辑是一样的)
前端MVC的困难：1、操作DOM的代码必须等待整个页面全部加载完成（js写在底部或者文档就绪函数）2、多个JS文件之间如果出现互相依赖程序员必须自己解决（只加载自己最关心的，类似于require.js）3、JS的原型继承给前端编程带来麻烦




在页面首页如果有数据绑定，用 ng-bind 避免快速刷新显示被匹配的项
$scope:往里面存东西，一个桥梁，建立C和V的链接，存的是数据M
service
先找ng-app,里边所有内容都归angular管，再找ng-
往scope里添加东西相当于往模型里添加数据 
directive:
angular需要通过指令去实现
view的复用是通过指令来实现的
#：内部锚点
ng-bind:第一个页面用，剩下的用{{}}，页面不会很丑（突然冒出来双括号）
angular.js中所有的元素dom的操作都必须放在link下

run方法：定义在模块下，页面加载后只运行一次，适合定义全局的，初始化一次就够了
replace
transclude:让指令之间进行嵌套的使用

主要用它的双向数据绑定来做一些表单验证，其它的特征


ng-app
ng-conroller
ng-model

ng-click等等

angular是一个mvc的框架，里面的内容比如多，比如mvvm，service,指令系统，依赖注入等

angu:是前端MVC，其中的双向数据绑定是最吸引人的地方，但是在derective指令这块倒是有和requier这块相似，都是封装组件或者说模块

在controller中先依赖注入$scope服务
在这个$scope添加属性，在这个属性中存入一些值

然后在views中添加ng-model，它的值引用的是$scope的属性




ng-if 跟 ng-show/hide 的区别有哪些？

第一点区别是，ng-if 在后面表达式为 true 的时候才创建这个 dom 节点，ng-show 是初始时就创建了，用 display:block 和 display:none 来控制显示和不显示。

第二点区别是，ng-if 会（隐式地）产生新作用域，ng-switch 、 ng-include 等会动态创建一块界面的也是如此。

这样会导致，在 ng-if 中用基本变量绑定 ng-model，并在外层 div 中把此 model 绑定给另一个显示区域，内层改变时，外层不会同步改变，因为此时已经是两个变量了。