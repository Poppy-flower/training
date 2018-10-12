[TOC]
#### 第二章 使用XMLHttpRequest对象

##### 2.1 XMLHttpRequest对象概述

```
//创建XMLHttpRequest对象
var xmlHttp;

function createXMLHttpRequest(){
    if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }else if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
    }
}
```

##### 2.2 方法和属性
|方法|描述|
|---|---|
|abort()|停止当前请求|
|getAllReponseHeaders()|把HTTP请求的所有响应首部作为键值对返回|
|getReponseHeader("header")|返回指定首部的串值|
|open("method","url")|建立对服务器的调用。method参数可以是GET、POST、PUT，url参数可以是相对URL或者是绝对URL，这个方法还包括三个可选的参数|
|send(content)|向服务器发送请求|
|setRequestHeader("header","value")|把指定首部设置为特定的值。在设置任何首部之前必须先调用open()|

|属性|描述|
|---|---|
|onReadyStateChange|每个状态改变时都会触发这个事件处理器，通常会调用一个JavaScript函数|
|readyState|请求的状态。有五个可取值：0=未初始化，1=正在加载，2=已加载，3=交互中，4=完成|
|responseText|服务器的响应，表示为一个串。|
|responseXML|服务器的响应，表示为XML。这个对象可以解析为DOM对象。|
|status|服务器的HTTP状态码。（200对应OK，404对应not found（未找到），等等）|
|statusText|HTTP状态码对应的文本（OK或Not Found（未找到）等等）|

##### 2.3 交互实例
**典型的Ajax交互是什么样的？**
1. 一个客户端事件触发一个Ajax事件。从简单的onchange到某个特定的用户动作，很多这样的事情都可以触发Ajax事件。可以有如下的代码：

```
<input type="text" id="email" name="email" onblur="validateEmail()">
```
2. 创建XMLHttpRequest对象的一个实例。使用open()方法建立调用,并设置URL以及所希望的HTTP方法（通常是GET或者POST）。请求实际上通过一个send()方法调用触发。可能的代码如下所示：
```
var xmlHttp;

function validateEmail(){
    var email = document.getElementById("email");
    var url = "validateEmail?"+escape(email.value);
    if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }else if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
    }
    xmlHttp.open("GET",url);
    xmlHttp.onReadyStateChange = callback;
    xmlHttp.send();
}
```
3. 向服务器做出请求。可能调用servlet、CGI脚本，或者任何服务器端技术。
4. 服务器可以做你想做的事情，包括访问数据库，甚至访问另一个系统。
5. 请求返回到浏览器。Content-Type设置为text／xml——XMLHttpRequest对象只能处理text/html类型的结果。在另外一些更复杂的示例中，响应可能涉及更广，还包括JavaScript、DOM管理以及其它相关的技术。需要说明，你还需要设置另外一些首部，使浏览器不会在本地缓存结果。为此可以使用下面的代码：
```
response.setHeader("Cache-Control","no-cache");
response.setHeader("Pragma","no-cache");//为了向后兼容
```
6. 在这个示例中，XMLHttpRequest对象配置为处理返回时需要调用callback函数。这个函数会检查XMLHttpRequest对象的readyState属性，然后检查服务器返回的状态码。如果一切正常，callback()函数就会在客户端上做一些有意思的事情。以下就是一个典型的回调方法。
```
function callback(){
    if(xmlHttp.readyState ==4){
        if(xmlHttp.status == 200){
            //doSomething interesting here
        }
    }
}
```
##### 2.4 GET和POST
> 如果请求是幂等的就可以使用GET，所谓幂等是指多个请求返回相同的结果。
> GET和POST实际的区别在于净荷的大小，在许多情况下，浏览器和服务器会限制URL的长度，URL用于向服务器发送数据。一般来讲，可以使用GET从服务器获取数据；换句话说，要避免使用GET改变服务器上的状态。
> 一般的，当改变服务器上的状态时应当使用POST方法，不同于GET，POST需要设置XMLHttpRequest对象的Content-Type首部，如下：
```
xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
```
与GET不同，POST不会限制发送给服务器的净荷的大小，而且POST请求不会保证是幂等的。