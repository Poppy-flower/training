一个 angular 应用应当如何良好地分层？
目录结构的划分

对于小型项目，可以按照文件类型组织，比如：

css
js
  controllers
  models
  services
  filters
templates  

但是对于规模较大的项目，最好按业务模块划分，比如：

css
modules
  account
    controllers
    models
    services
    filters
    templates
  disk
    controllers
    models
    services
    filters
    templates

modules 下最好再有一个 common 目录来存放公共的东西。
逻辑代码的拆分

作为一个 MVVM 框架，Angular 应用本身就应该按照 模型，视图模型（控制器），视图来划分。

这里逻辑代码的拆分，主要是指尽量让 controller 这一层很薄。提取共用的逻辑到 service 中 （比如后台数据的请求，数据的共享和缓存，基于事件的模块间通信等），提取共用的界面操作到 directive 中（比如将日期选择、分页等封装成组件等），提取共用的格式化操作到 filter 中等等。

在复杂的应用中，也可以为实体建立对应的构造函数，比如硬盘（Disk）模块，可能有列表、新建、详情这样几个视图，并分别对应的有 controller，那么可以建一个 Disk 构造函数，里面完成数据的增删改查和验证操作，有跟 Disk 相关的 controller，就注入 Disk 构造器并生成一个实例，这个实例就具备了增删改查和验证方法。这样既层次分明，又实现了复用（让 controller 层更薄了）。
