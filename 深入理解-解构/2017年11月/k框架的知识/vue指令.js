Vue.js常用指令
Vue指令以v-开头，作用在HTML元素上，将指令绑定在元素上时，会给绑定的元素添加一些特殊行为，可将指令视作特殊的HTML属性（attribute）。
下面将介绍Vue中常用的几个内置指令。当然，Vue除了内置指令，也可以根据需求自定义指令。

v-if指令
条件判断指令，根据表达式值的真假来插入或删除元素，表达式返回一个布尔值，语法如下：
v-if = "expression"

v-show指令
条件渲染指令，与v-if不同的是，无论v-show的值为true或false，元素都会存在于HTML代码中；而只有当v-if的值为true，元素才会存在于HTML代码中。v-show指令只是设置了元素CSS的style值。语法如下：
v-show = "expression"

v-else指令
可配合v-if或v-show使用，v-else指令必须紧邻v-if或v-show，否则该命令无法正常工作。v-else绑定的元素能否渲染在HTML中，取决于前面使用的是v-if还是v-show。若前面使用的是v-if，且v-if值为true，则v-else元素不会渲染；若前面使用的是v-show，且v-show值为true，则v-else元素仍会渲染到HTML。

v-for指令
循环指令，基于一个数组渲染一个列表，与JavaScript遍历类似，语法如下：
v-for = "item in items;"

v-bind指令
给DOM绑定元素属性，语法如下：
v-bind:argument="expression"
其中，argument通常是HTML元素的特性，如：v-bind:class="expression"。
注：v-bind指令可以缩写为:冒号。如：:class="expression"。