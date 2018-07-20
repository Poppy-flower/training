vue1.0         vue2.0           description

init           beforeCreate     组件实例刚被创建，组件属性计算之前
created        created			组件实例创建完成，属性已绑定，但dom还未生成，$el属性还不存在
beforeCompile  beforeMount		模版编译/挂载之前
compiled	   mounted			模版编译/挂载之后
ready          mounted			模版编译/挂载之后（不保证组件已在document中）
			   beforeUpdate     组件更新之前
			   updated          组件更新之后
			   activated        for keep-alive，组件被激活时调用
			   deactivated      for keep-alive，组件被移除时调用
attached		
datached		
beforeDestory  beforeDestory    组件销毁前调用
destoryed      destoryed        组件销毁后调用