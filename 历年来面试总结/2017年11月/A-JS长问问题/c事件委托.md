主要是利用事件冒泡机制来实现的，就是将子元素的事件绑定给父元素上
主要应用场景是：
1. 可以解决后生成的元素事件绑定问题
2. 子元素过多，事件绑定的性能问题


标准浏览器中
ele.addEventListener('click',function(){},true// true就是事件捕获)
IE中：不支持事件捕获


事件冒泡，子元素的事件会向上传播，传播到父元素身上。
ele.addEventListener('click',function(){},false//false就是事件冒泡)
如何取消事件冒泡：标准浏览器：e.stopPropagation;
IE:window.event.cancelBubble=true;（为了做兼容，如果在前面写明e=e||window.event;IE里面就是e.cancelBubble=true;）


从里往外来 false，
浏览器的默认行为，直到document为止
事件冒泡：在一个对象上触发某类事件onclick，那么这个事件会向这个对象的父级对象
从里到外，直至它被处理

利用事件冒泡，解决后生成元素的事件绑定问题，叫做事件委托或者事件代理。
不是所有的事件都能冒泡，例如：blur、focus、load、unload

好处：  节省性能，只在父元素上绑定一个就行了
事件e，事件源target，事件处理函数oDiv.onclick兼容性非常好，所有浏览器都支持，不能多次绑定，只执行最后一次绑定