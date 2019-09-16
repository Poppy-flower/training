meta标签
===

meta标签是HTML中的一个重要标签，它位于HTML文档头部的<HEAD>标签和<TITL>标签之间。使用meta，我们可以定义页面编码语言、搜索引擎优化、自动刷新并指向新的页面、控制页面缓冲、响应式视窗等

HTML5之前，meta标签只有两个属性，分别是 name 属性和 http-equiv 属性。

一、name属性
---

name属性主要用于描述网页，对应属性是 content ，以便于搜索引擎机器人查找、分类（目前几乎所有的搜索引擎都使用网上机器人自动查找meta值来给网页分类）。

语法：

```
<meta name="参数" content="参数值" />
```

**具体参数：**

**1.Keywords（关键字）**

说明：为搜索引擎提供的关键字列表

语法：

```
<meta name="keywords" content="程序员,程序猿,攻城狮"/>
```

**2.Description（简介）**

说明：Description用来告诉搜索引擎你的网站主要内容。

语法：

```
<meta name="description" content="meta标签是HTML中的一个重要标签，它位于HTML文档头部的<HEAD>标签和<TITL>标签之间。"/>
```

**3.robots（机器人向导）**

说明：robots用来告诉搜索机器人哪些页面需要索引，哪些页面不需要索引。

语法：

```
<meta name="robots" content=""/>
```

content的参数值有all,none,index,noindex,follow,nofollow，默认值是all。

参数为 all ：文件将被检索，且页面上的链接可以被查询；

参数为 none ：文件将不被检索，且页面上的链接不可以被查询；

 参数为 index ：文件将被检索；

参数为 noindex ：文件将不被检索，但页面上的链接可以被查询；

参数为 follow ：页面上的链接可以被查询；

参数为 nofollow ：文件将被检索，但页面上的链接不可以被查询；

**4.author（作者）**

说明：标注网页的作者

语法：

```
<meta name="author" content="TG,TG@qq.com"/>
```

**5.copyright（版权）**

说明：标注版权

语法：

```
<meta name="copyright" content="本网站版权归TG所有"/>
```

**6.generator**

说明：说明网站采用什么编辑器制作。

语法：

```
<meta name="generator" content="你所用的编辑器"/>
```

**7.revisit-after（重访）**

说明：网站重访

语法：

```
<meta name="revisit-after" content="7days"/>
```

7days表示7天

```
这样设置搜索引擎就是7天来一次。使用这个标签的网站，通常是因为网站数据量非常大，被搜索引擎过于频繁的抓取，会占用过大的资源，影响网站的访问。所以，希望搜索引擎不要天天过来，抓取过一次了，那么等7天后再来。一般的网站是不需要这个标签的。
搜索引擎对网站的抓取频率最主要是取决于你自身网站的更新频率，只要你的网站经常更新、添加新的内容，那么搜索引擎的蜘蛛和爬虫也会常来更新你的网站，可以说这是决定搜索引擎更新你的网站最重要的、最根本的因素。此外，PR值、网站结构以及服务器的稳定性等都影响到搜索引擎的抓取，不是一个revisit-after元标签能够决定的。
```

**二、http-equiv属性**
---

http-equiv类似于HTTP的头部协议，它回应给浏览器一些有用的信息，以帮助正确和精确地显示网页内容。与之对应的属性值为content，content中的内容其实就是各个参数的变量值。

语法：

```
<meta http-equiv="参数"  content="参数值"/>
```

参数说明：

**1.Expires（期限）**

说明：指定网页在缓存中的过期时间，一旦网页过期，必须到服务器上重新传输。

语法：

```
<meta http-equiv="expires" content="Wed, 26 Feb 1997 08:21:57 GMT"/>
```

注意：必须使用GMT的时间格式，或者直接设为0（数字表示多久后过期）

**2.Pragma（cache模式）**

说明：禁止浏览器从本地计算机的缓存中访问页面内容。

语法：

```
<meta http-equiv="Pragma" content="no-cache"/>
```

注意：网页不保存在缓存中，每次访问都刷新页面。这样设定，访问者将无法脱机浏览。

**3.Refresh（刷新）**

说明：自动刷新并指向新页面。

语法：

```
<meta http-equiv="Refresh" content="5,URL=http:://baidu.com"/>
```

其中的5表示5秒后自动刷新并调整到URL新页面。

**4.Set-Cookie（cookie设定）**

说明：浏览器访问某个页面时会将它存在缓存中，下次再次访问时就可从缓存中读取，以提高速度。当你希望访问者每次都刷新你广告的图标，或每次都刷新你的计数器，就要禁用缓存了。

如果网页过期，那么存盘的cookie将被删除。

语法：

```
<meta http-equiv="Set-Cookie"  content="cookievalue=xxx; expires=Wednesday,
　　　　　　 21-Oct-98 16:14:21 GMT; path=/">
```

注意：必须使用GMT的时间格式

**5.Window-target（显示窗口的设定）**

说明：强制页面在当前窗口以独立页面显示

语法：

```
<meta http-equiv="Window-target" content="_top"/>
```

可以用来防止别人在框架里调用你的页面。

**6.content-Type（显示字符集的设定）**

说明：设定页面使用的字符集

```
<meta http-equiv="content-Type" content="text/html;charset=utf-8"/>
```

其他参数值：

meta标签的charset的信息参数如GB2312时，代表说明网站是采用的编码是简体中文； 

meta标签的charset的信息参数如BIG5时，代表说明网站是采用的编码是繁体中文；  

meta标签的charset的信息参数如iso-2022-jp时，代表说明网站是采用的编码是日文；   

meta标签的charset的信息参数如ks_c_5601时，代表说明网站是采用的编码是韩文；   

meta标签的charset的信息参数如ISO-8859-1时，代表说明网站是采用的编码是英文；   

meta标签的charset的信息参数如UTF-8时，代表世界通用的语言编码；

**7.content-Language（显示语言的设定）**

说明：显示语言

语法：

```
<meta http-equiv="Content-Language" content="zh-cn"/>
```

**8.http-equiv="imagetoolbar"**

```
<meta http-equiv="imagetoolbar" content="false"/>
```

指定是否显示图片工具栏，当为false代表不显示，当为true代表显示。

HTML5
---

在HTML5中，name的属性新增了viewport、format-detection等

**1.viewport**

说明：能优化移动浏览器的显示（屏幕的缩放）

语法：

```
<meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"/>

```

参数值：

width viewport的宽度[device-width | pixel_value]width如果直接设置pixel_value数值，大部分的安卓手机不支持，但是ios支持；   

height – viewport 的高度 （范围从 223 到 10,000 ）   

user-scalable [yes | no]是否允许缩放   

initial-scale [数值] 初始化比例（范围从 > 0 到 10）   

minimum-scale [数值] 允许缩放的最小比例   

maximum-scale [数值] 允许缩放的最大比例   

target-densitydpi 值有以下（一般推荐设置中等响度密度或者低像素密度，后者设置具体的值dpi_value，另外webkit内核已不准备再支持此属性）   

-- dpi_value 一般是70-400//没英寸像素点的个数   

-- device-dpi设备默认像素密度   

-- high-dpi 高像素密度   

-- medium-dpi 中等像素密度   

-- low-dpi 低像素密度

**2.format-detection（忽略电话号码和邮箱）**

说明：忽略电话号码和邮箱

语法：

```
//忽略页面中的数字识别为电话号码<meta name="format-detection" content="telephone=no">
//忽略页面中的邮箱格式识别为邮箱<meta name="format-detection" content="email=no"/>

```

也可以写成：

```
<meta name="format-detection" content="telphone=no, email=no"/>  
```