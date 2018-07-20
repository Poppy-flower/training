1. 什么是Apache web服务器?

　　答案 : Apache web 服务器 HTTP 是一个非常流行、功能强大并且开源，用于管理web站点并向网络提供web文件服务. 它基于 HTTP 超文本传输协议运行, 这一协议提供了服务器和客户端web浏览器通信的标准. 它支持 SSL, CGI 文件, 虚拟主机还有许多其它的功能特性.

2. 如果检查 Apache 及其版本?

　　答案 : 首先，使用rpm命令来检查Apache是否已经安装. 如果已经安装好了，那就使用httpd -v 命令来姜茶它的版本.

[root@tecmint ~]# rpm -qa | grep httpd

httpd-devel-2.2.15-29.el6.centos.i686
httpd-2.2.15-29.el6.centos.i686
httpd-tools-2.2.15-29.el6.centos.i686

[root@tecmint ~]# httpd -v

Server version: Apache/2.2.15 (Unix)
Server built:   Aug 13 2013 17:27:11

　　3. Apache 以那个用户运行? 主配置文件的位置在哪里?.

　　答案 : Apache 以“nobody”用户和httpd守护进程运行. Apache 主要的配置文件在: /etc/httpd/conf/httpd.conf (CentOS/RHEL/Fedora) 还有 /etc/apache2.conf (Ubuntu/Debian).


　　4. Apache 侦听 http 和 https 请求?

　　答案 :  Apache 默认在80端口侦听http，在443端口侦听https(需要SSL整数). 你也可以使用 netstat 命令 来检查端口.

[root@tecmint ~]# netstat -antp | grep http

tcp        0      0 :::80                       :::*                        LISTEN      1076/httpd          
tcp        0      0 :::443                      :::*                        LISTEN      1076/httpd

　　5. 如何在你的Linux机器上安装Apache服务器?

　　答案 : 很简单, 你可以使用任何诸如(RHEL/CentOS/Fedora)上的yum以及(Debian/Ubuntu)上的apt-get来在你的Linux上安装Apache服务器.

[root@tecmint ~]# yum install httpd

[root@tecmint ~]# apt-get install apache2

 
　　6. 你可以在哪里找到Apache Web服务器的所有配置路径?

　　答案: Apache默认的配置路径放在： (RHEL/CentOS/Fedora) 中是在 /etc/httpd/ on 而 (Debian/Ubuntu) 是在/etc/apache2下 .

[root@tecmint ~]# cd /etc/httpd/
[root@tecmint httpd]# ls -l
total 8
drwxr-xr-x. 2 root root 4096 Dec 24 21:44 conf
drwxr-xr-x. 2 root root 4096 Dec 25 02:09 conf.d
lrwxrwxrwx  1 root root   19 Oct 13 19:06 logs -> ../../var/log/httpd
lrwxrwxrwx  1 root root   27 Oct 13 19:06 modules -> ../../usr/lib/httpd/modules
lrwxrwxrwx  1 root root   19 Oct 13 19:06 run -> ../../var/run/httpd

 

[root@tecmint ~]# cd /etc/apache2
[root@tecmint apache2]# ls -l
total 84
-rw-r--r-- 1 root root  7113 Jul 24 16:15 apache2.conf
drwxr-xr-x 2 root root  4096 Dec 16 11:48 conf-available
drwxr-xr-x 2 root root  4096 Dec 16 11:45 conf.d
drwxr-xr-x 2 root root  4096 Dec 16 11:48 conf-enabled
-rw-r--r-- 1 root root  1782 Jul 21 02:14 envvars
-rw-r--r-- 1 root root 31063 Jul 21 02:14 magic
drwxr-xr-x 2 root root 12288 Dec 16 11:48 mods-available
drwxr-xr-x 2 root root  4096 Dec 16 11:48 mods-enabled
-rw-r--r-- 1 root root   315 Jul 21 02:14 ports.conf
drwxr-xr-x 2 root root  4096 Dec 16 11:48 sites-available
drwxr-xr-x 2 root root  4096 Dec  6 00:04 sites-enabled

　　7. Apache 可以被TCP封装器固定吗?

　　答案 : 不可以，它不可以被TCP封装器固定下来，因为它不支持Linux的libwrap.a库.


　　8. 如何在Apache中改变默认的端口，以及如何侦听其中的指令工作?

　　答案 : 在httpd.conf文件中有一个指令“Listen”可以让我们改变默认的Apache端口. 在Listen 指令的帮助下我们可以在不同的端口还有不同的接口进行Apache侦听.

　　假设你拥有多个IP注册到了你的Linux机器，并且想要Apache在一个特殊的以太网端口或接口接收HTTP请求, 即使是这种要求也可以用Listen指令做到.

　　为了改变Apache的默认端口，请使用打开你的Apache主配置文件 httpd.conf 或者 apache2.conf .

[root@tecmint ~]# vi /etc/httpd/conf/httpd.conf

[root@tecmint ~]# vi /etc/apache2/apache2.conf

 

　　查找”Listen”这个单词, 注释原来的那一行并且在那一行下面写上你自己的指令.

# Listen 80
Listen 8080

OR

Listen 172.16.16.1:8080

 

　　保存文件并重启web服务器.

[root@tecmint ~]# service httpd restart

[root@tecmint ~]# service apache2 restart

　　9. 我们可以一台机器上放两个Apache Web服务器么?

　　答案 : 可以，我们在一台Linux机器上同时运行两个不同的Apache服务器, 但条件是它们应该在不同的端口上侦听，而我们可以使用Apache的Listen指令来改变端口.


　　10. 你知道Apache的DocumentRoot是啥意思么?

　　答案 : DocumentRoot 的 Apache 意思是服务器上web文件的存储位置, 默认的DocumentRoot是 /var/www/html 或者 /var/www. 这是可以被修改的，只要修改主机中的虚拟主机配置 “DocumentRoot”就行了.


　　11. 如何在不同的文件夹下面管理文件，还有什么是 Alias 指令?

　　答案 : 是的，这可以借助于主Apache配置文件中的Alias指令做到. Alias 指令可以对文件系统中的资源按图索骥, 它使用一个URL 路径，并且使用重定向到系统上的一个文件或目录来替换它.

　　使用Alias指令，它是Apache的 mod_alias 模块的一部分. Alias指令的默认语法是:

Alias /images /var/data/images/

　　上面的示例中, 放在/var/data/images 前缀前面的 /images url的意思是客户端请求“http://www.example.com/images/sample-image.png” 会让Apache从服务器上的/var/data/images/sample-image.png 取 “sample-image.png” 文件. 它也被称为URL 映射.


　　12. 对于“DirectoryIndex”你是怎么理解的?

　　答案 : DirectoryIndex 是当有一个来自主机的请求时Apache首先会去查找的文件. 例如: 客户端发送请求www.example.com, Apache 对此将到站点的文件根目录查找index文件 (首先要展示的文件).

　　DirectoryIndex 的默认设置是 .html index.html index.php, 如果不是这个名字, 你需要对 httpd.conf 或者 apache2.conf 中的 DirectoryIndex 值做出修改，以将其展示在你的客户端浏览器上.

#
# DirectoryIndex: sets the file that Apache will serve if a directory
# is requested.
#
# The index.html.var file (a type-map) is used to deliver content-
# negotiated documents.  The MultiViews Option can be used for the
# same purpose, but it is much slower.
#
DirectoryIndex index.html index.html.var index.cgi .exe

　　13. 当index文件丢失时如何使目录列表失效?

　　答案 : 如果站点根目录中的主index文件失效, 那么Apache将会在浏览器上列出所有内容类似的文件，以替换站点主页.

　　为了关闭Apache目录列表, 你可以在主配置文件中全局的设置，或者在.htaccess文件中部分的设置如下规则.

<Directory /var/www/html>
   Options -Indexes
</Directory>

　　14. Apache Web 服务器有些什么不同的日志文件?

　　答案 : Apache Web 服务器的默认日志文件是访问日志 “/var/log/httpd/access_log” 和错误日志:/var/log/httpd/error_log”.


　　15. 你是怎样理解错误日志中的“connection reset by peer”的?

　　答案 : 当服务器正在向请求提供服务时终端用户中断连接, 我们就会在错误日志中看到“connection reset by peer“.


　　16. 什么是Apache的虚拟主机?

　　答案 : 虚拟主机部分包含的信息包括站点名称，文档根路径，目录索引，服务器管理员邮箱，错误日志文件路径等等。

　　你可以随意为你的域添加你需要的指令，但是要运行一个站点，至少要配置量个参数服务器名称和文档根目录。 在Linux机器上，通常我们在httpd.conf文件的末尾来设定我们的虚拟主机部分的相关配置。

　　虚拟主机示例

<VirtualHost *:80>
   ServerAdmin webmaster@dummy-host.example.com
   DocumentRoot /www/docs/dummy-host.example.com
   ServerName dummy-host.example.com
   ErrorLog logs/dummy-host.example.com-error_log
   CustomLog logs/dummy-host.example.com-access_log common
</VirtualHost>

 

    ServerAdmin : 通常是指站点拥有者的电子邮箱，错误和通知可以发到里面。

    DocumentRoot : web文件在服务器上存放位置(必须配置).

    ServerName : 通过浏览器访问站点时的域名(必须配置).

    ErrorLog : 日志文件的位置，里面记录了所有与该站点相关的日志。