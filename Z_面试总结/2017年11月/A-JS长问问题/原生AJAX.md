ajax是什么：客户端与服务器端异步的通信的技术（不刷新页面的）

原理：

第一步：创建XMLHttpRequest 对象
	xmlhttp=new XMLHttpRequest()（标准浏览器中用）;（它有兼容性问题，在ie中用的是new ActiveXObject）
第二步：向服务器发送请求
	xmlhttp.open("GET/POST",url,true);
	xmlhttp.send();
第三步：服务器端接受数据并处理，响应结果，在页面中通过执行回调函数，在回调函数中进行相应的dom操作（不阻塞用户，达到无刷新的效果）
	xmlhttp.on readystate change=function(){
         if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {请求状态5个，0 = 未初始化，1 = 正在加载，2 = 加载完成，3 = 交互中，4 = 完成

    //相应的dom操作
    document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
    }
  }


readystate
  0 - (未初始化)   还没有调用send()方法
  1 - (正在加载)     已调用send()方法，正在发送请求
  2 - (加载完成)      send()方法执行完成
  3 - (交互)     正在解析响应内容
  4 - (完成)     响应内容解析完成，可以在客户端调用了
xmlhttp.status
• 200 ＝ 服务器        成功返回网页
• 301 ＝ 客户端所请求的 永久重定向   URL已移走，需要客户端重定向到其他URL
• 302 ＝ 暂时性重定向
• 304  ＝ 客户端所请求的       URL未发生变化
• 400 =  服务器不理解请求的语法
• 403 ＝ 客户端的请求被服务端       禁止
404 = 客户端所请求的URL在服务器端      不存在
500 ＝ 服务端在处理客户端请求时      发生异常
502 = 错误的网关

AJAX的优点
<1>.无刷新更新数据。
<2>.异步与服务器通信

3，例如
function CreateXmlHttp() {
    //标准浏览器创建XmlHttpRequest对象
    if (window.XmlHttpRequest) {
        xmlhttp = new XmlHttpRequest();
    }
    //IE浏览器创建XmlHttpRequest对象
    if (window.ActiveXObject) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (e) {
            try {
                xmlhttp = new ActiveXObject("msxml2.XMLHTTP");
            }
            catch (ex) { }
        }
    }
}
function Ustbwuyi() {
    var data = document.getElementById("username").value;
    CreateXmlHttp();
    if (!xmlhttp) {
        alert("创建xmlhttp对象异常！");
        return false;
    }
    xmlhttp.open("POST", url, false);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {     //请求状态5个，0 = 未初始化，1 = 正在加载，2 = 加载完成，3 = 交互中，4 = 完成
            document.getElementById("user1").innerHTML = "数据正在加载...";
            if (xmlhttp.status == 200) {      //服务器的HTTP状态码 
                document.write(xmlhttp.responseText);
            }
        }
    }
    xmlhttp.send();
}
 