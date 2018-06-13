###  webpack 作业运行方法
1. 进入webpack-work  文件夹下，node版本为v6.11.0  , 执行npm install 安装包依赖
2. 执行 npm start 启动项目
3. 浏览器输入localhost:8099 访问作业的页面

## 说明
1. package.json  主要是整个项目的依赖包
2. webpack.config.js 主要是项目的webpack  配置文件
3. dev-server.js  为package.json  文件中 scripts 自己配置的npm start 是执行的这个文件，在这个文件中添加了 webpack 自动编译等功能



##问题
   最初我是在package.json  的  这个位置这么写的，然后每次打包完运行，都是运行dist文件夹下的 index.html  文件，一有修改就重新运行，很麻烦；
   "scripts": {
       "start": "rm -rf dist && webpack"
     },

   后来我就参考网上的 配置了dev-server.js  但是这还没搞太明白  ,不很清楚他的原理

