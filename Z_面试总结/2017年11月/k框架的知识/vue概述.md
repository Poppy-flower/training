
Vue.js是JavaScript MVVM（Model-View-ViewModel）库，十分简洁，

Vue核心只关注视图层，

相对AngularJS提供更加简洁、易于理解的API。

Vue尽可能通过简单的API实现响应的数据绑定和组合的视图组件。

MVVM模式即Model-View-ViewModel。


Vue是以数据为驱动的，Vue自身将DOM和数据进行绑定，一旦创建绑定，DOM和数据将保持同步，每当数据发生变化，DOM会跟着变化。
ViewModel是Vue的核心，它是Vue的一个实例。Vue实例时作用域某个HTML元素上的，这个HTML元素可以是body，也可以是某个id所指代的元素。



Vue.js特点
简洁：页面由HTML模板+Json数据+Vue实例组成
数据驱动：自动计算属性和追踪依赖的模板表达式
组件化：用可复用、解耦的组件来构造页面
轻量：代码量小，不依赖其他库
快速：精确有效批量DOM更新
模板友好：可通过npm，bower等多种方式安装，很容易融入


声明式渲染
由HTML模板（View）+Json数据（Model）+Vue实例（ViewModel）组成。
创建Vue的实例，需传入一个选项对象，如：数据、挂载元素、方法、模生命周期钩子等。

双向绑定
在Vue中使用v-model在表单元素上实现双向绑定。当在输入框输入的信息发生变化，<p>...</p>中的信息随之变化；当通过控制台中的Console，修改exampleData.message的值，输入框中的信息也随之变化。





