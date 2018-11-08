data-main 入口
require: amd，异步模块定义， 依赖前置
sea.js: cmd，通用模块定义，依赖就近

原理是的动态加载script标签
createElement(script)
body.append
用正则匹配依赖


在require.js中使用define函数定义模块
 define定义   rquire是使用
  define([a, b, c], function(a,b){

	在定义的模块后面return 后面返回你想要的数据类型，
	也可以          这个是amd的
	return ；
}


define(function(){
	
	requrie('a.js'),这个是cmd的，需要的=时候再加载
})

sea.js的一篇文章，有说明，使用异步的方式加载一个模块的话，可以提高模块的加载速度

