JavaScript是一种单线程运行但又绝不会阻塞的语言，其实现非阻塞的关键是“事件循环”和“回调机制”。Node.js在JavaScript的基础上实现，同样是单线程运行的语言。在单线程中要解决高并发的问题，就要采用非阻塞、异步编程的方式。简单的说，就是在非常耗时的I/O操作中，采用非阻塞的方式继续执行后续的代码，并且进入事件循环（Event Loop）。当I/O操作完成，程序会通过回调函数的方式通知原操作。


2.事件循环机制
1. 事件驱动模式
事件驱动编程是一种广泛使用的编程模型，事件驱动编程可以理解为通过事件或状态的变化来实现程序流程的控制。
1.1 DOM中的事件驱动
在DOM中， 通过添加事件监听的方式来响应'click'、'change'等事件。
在DOM0级中，可以使用以下方式添加事件监听：
var btn = document.getElementById("myBtn");
btn.onclick = function(){
  alert('itbilu.com');
}
在DOM2级中，可以使用以下方式添加事件监听：
var btn = document.getElementById("myBtn");
btn.addEventListener("click", showMessage, false);

function showMessage(){
  alert('itbilu.com');
}
DOM对事件的处理，这在本质上是一种事件驱动编程模式。在上面示例中，对按钮添加了'click'事件处理程序（回调函数），在用户点击按钮时会调用指定的处理程序。

1.2 Node.js中的事件驱动
事件驱动模式是Node.js实现高并发关键点之一。Node.js的事件机制由EventEmitter模块实现，Node中很多可以发送事件的核心模块都继承自该模块。
在Web服务器中，我们可以使用以下方式来处理用户请求：
var http = require('http');

//创建一个HTTP服务器
var server = http.createServer();

//监听request事件
server.on('request', function (req, res) { 
  //对request事件的处理	
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!')
});
server.listen(3000)
在上例中，我们为server添加了'request'事件上监听。当收到用户请求时该事件对应的回调函数会被调用，在回调函数中可以进行用户请求的处理与响应等操作。
传统Web服务器处理用户请求时，用户请求只能依次处理，如果处理时间较长会造成请求的阻塞。不同于传统的Web服务器，事件驱动使得Node创建的Web服务器非常的高效，用户不必须等待上个用户请求处理完成，就可以接收新的请求，并在处理完成后调用对应回调函数响应请求即可。事件驱动和回调机制赋予了Node.js强大并发处理能力。
