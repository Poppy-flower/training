
#### 讲堂需求 文件以及运行说明

##### 1. ykit.js  是本项目的配置文件

（1）npm install ykit -g  全局安装ykit

 (2) npm install 安装依赖包

（3）执行 sudo(mac需要加sudo) ykit server 起服务，在浏览器输入localhost:80/index.html 访问页面

（4） 如果想得到压缩文件的话 执行 ykit pack -m ,得到的压缩文件在 prd  目录下面 ，
在index.html里面需要手动引入打包之后的文件，方可直接运行index.html;

 (5) 文件结构想要调整的话，直接调整index.html  的引用地址就可以。

 ----

##### 2. 文件说明
（1）prd /dev  都是打包之后生成的文件

（2）src  是源文件，其中index.js 是打包的入口文件 ；

（3）src->scripts,其中的files 是存放的视频文件和视频的封面图（封面可以没有）；
   components 存的是组件，select是父组件，leftTree是左边的目录组件；rightSide是右边的视频组件；
   其中配置视频的数据在select组件文件夹下面

（4）data.json  所在目录 src---componnets--select--data.json

   数据结构说明：
    title 为节点的名称；
    key为节点的唯一标志，必须是唯一的；
    children 为节点的子节点，也是一个对象数组


#### 3.需要修改的文件说明
    （1）获取数据的接口修改  src->select->select.js  100行 componentDidMount  函数里
    （2） 是否刷新来实现视频修改  src->select->select.js  64行  handleSelect函数里 有注释
