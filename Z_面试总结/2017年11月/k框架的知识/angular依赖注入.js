详述 angular 的 “依赖注入”
栗子

依赖注入是一种软件设计模式，目的是处理代码之间的依赖关系，减少组件间的耦合。

举个栗子，如果没有使用 AngularJS，想从后台查询数据并在前端显示，可能需要这样做：

var animalBox = document.querySelector('.animal-box');

var httpRequest = {
    get: function(url, callback){
        console.log(url + ' requested');
        var animals = ['cat', 'dog', 'rabbit'];
        callback(animals);
    }
}

var render = function(el, http){
    http.get('/api/animals', function(animals){
        el.innerHTML = animals;
    })
}

render(httpRequest, animalBox);

但是，如果在调用 render 的时候不传参数，像下面这样，会报错，因为找不到 el 和 http（定义的时候依赖了，运行的时候不会自动查找依赖项）

render();
// TypeError: Cannot read property 'get' of undefined

而使用 AngularJS，可以直接这样

function myCtrl = ($scope, $http){
    $http.get('/api/animals').success(function(data){
        $scope.animals = data;
    })
}

也就是说，在 Angular App 运行的时候，调用 myCtrl，自动做了 $scope 和 $http 两个依赖性的注入。
原理

AngularJS 是通过构造函数的参数名字来推断依赖服务名称的，通过 toString() 来找到这个定义的 function 对应的字符串，然后用正则解析出其中的参数（依赖项），再去依赖映射中取到对应的依赖，实例化之后传入。

简化一下，大概是这样：

var inject = {
    // 存储依赖映射关系
    storage: {},    
    // 注册依赖
    register: function(name, resource){
        this.storage[name] = resource;
    }, 
    // 解析出依赖并调用
    resolve: function(target){
    
        var self = this;
        
        var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
        var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
        fnText = target.toString().replace(STRIP_COMMENTS, '');
        argDecl = fnText.match(FN_ARGS)[1].split(/, ?/g);
        
        var args = [];
        argDecl.forEach(function(arg){
            if(self.storage[arg]){
                args.push(self.storage[arg]);
            }
        })
        
        return function(){
            target.apply({}, args);
        }
    }
}

使用这个 injector，前面那个不用 AngularJS 的栗子这样改造一下就可以调用了

inject.register('el', animalBox);
inject.register('ajax', httpRequest);
render = inject.resolve(render);
render();

问题

因为 AngularJS 的 injector 是假设函数的参数名就是依赖的名字，然后去查找依赖项，那如果按前面栗子中那样注入依赖，代码压缩后（参数被重命名了），就无法查找到依赖项了。

// 压缩前
function myCtrl = ($scope, $http){
    ...
}

// 压缩后
function myCtrl = (a, b){
    ...
}

所以，通常会使用下面两种方式注入依赖（对依赖添加的顺序有要求）。

数组注释法


myApp.controller('myCtrl', ['$scope', '$http', function($scope, $http){
    ...
}])

显式 $inject

myApp.controller('myCtrl', myCtrl);
function myCtrl = ($scope, $http){
    ...
}
myCtrl.$inject = ['$scope', '$http'];

补充

对于一个 DI 容器，必须具备三个要素：依赖项的注册，依赖关系的声明和对象的获取。

在 AngularJS 中，module 和 $provide 都可以提供依赖项的注册；内置的 injector 可以获取对象（自动完成依赖注入）；依赖关系的声明，就是前面问题中提到的那样。

下面是个栗子


// 对于 module，传递参数不止一个，代表新建模块，空数组代表不依赖其他模块
// 只有一个参数（模块名），代表获取模块

// 定义 myApp，添加 myApp.services 为其依赖项
angular.module('myApp', ['myApp.services']);
// 定义一个 services module，将 services 都注册在这个 module 下面
angular.module('myApp.services', [])

// $provider 有 factory, service, provider, value, constant

// 定义一个 HttpService
angular.module('myApp.services').service('HttpService', ['$http', function($http){
    ...
}])

参考

    [AngularJS] 自己实现一个简单的依赖注入

    理解angular中的module和injector，即依赖注入

    AngularJS中的依赖注入实际应用场景
