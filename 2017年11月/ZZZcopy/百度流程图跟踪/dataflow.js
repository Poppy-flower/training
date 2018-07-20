;(function () {
    /**
     * 数据流类，一个页面中可能有多个数据流图，需要多个数据流对象实例，所以这里定义一个数据流类
     * @param options 初始化参数
     *                el(数据流图放置的容器位置)
     *                type(数据流图形状): basic(标准，默认值)
     *                data(数据来源)
     *                direction(展示方向): vertical(垂直，默认值)、horizontal(水平)
     *                node(默认节点信息)：shape(节点形状，默认值square)、radius(圆角值，默认值0)
     *                prompt(划入节点时是否提示更详细信息)：true(提示，默认值)、false(不提示)
     *                css(节点的样式)
     *
     * @constructor
     */
    var DataFlow = function (options) {
        this.options = $.extend(options, {
            type: 'basic',
            direction: 'horizontal',
            prompt: true,
            node: {
                shape: 'square',
                radius: '5'
            }
        });

        this.init();
    };
    DataFlow.prototype.init = function () {
        var me = this;
        $.ajax({
            url: this.options.data,
            dataType: 'json',
            success: function(flow) {
                me.$el = $(me.options.el);
                me.$el.addClass('flow-holder');
                var $flowTitle = $('<h1 class="flow-title">'+flow.title+'</h1>');
                var $flowDesc = $('<p class="flow-desc">'+flow.desc+'</p>');
                me.$el.append($flowTitle).append($flowDesc);

                if(flow.nodes.length > 0){
                    for(var i=0; i<flow.nodes.length; i++){
                        if(i == flow.nodes.length - 1){
                            flow.nodes[i].last = true;
                        }
                        me.createNode(flow.nodes[i]);
                    }
                }
            }
        });
    };
    DataFlow.prototype.createNode = function (node) {
        node.$node = $('<div class="flow-node"></div>').css({
            // borderRadius: ( parseInt(node.radius) || parseInt(this.options.node.radius) ) + 'px'
        }).mousemove(function (e) {
            node.$nodeDesc.show().offset({
                left: e.pageX + 10,
                top: e.pageY + 10
            });
        }).mouseout(function () {
            node.$nodeDesc.hide();
        }).addClass(this.options.direction).addClass(node.status?node.status:'undone').addClass(node.shape || this.options.node.shape);
        node.$nodeTitle = $('<h3 class="flow-node-title">'+node.title+'</h3>');
        node.$nodeDesc = $('<p class="flow-node-desc">'+node.desc+'</p>');
        node.$nodeLink = $('<img src="link.png" class="flow-node-link"/>').addClass(this.options.direction);
        node.$node.append(node.$nodeTitle).append(node.$nodeDesc);
        this.$el.append(node.$node);
        if(node.subNodes && node.subNodes.show){
            console.log(node.subNodes);
            this.createSubNode(node);
        }
        if(!node.last){
            this.createLink(node);
        }
    };
    DataFlow.prototype.createSubNode = function (node) {
        var $subNode = $('<ul class="flow-subnodes"></ul>');
        for(var i=0; i<node.subNodes.nodes.length; i++){
            var subNodeItem = node.subNodes.nodes[i];
            var $subNodeItem = $('<li>'+subNodeItem.title+'</li>');
            $subNode.append($subNodeItem);
        }
        node.$node.append($subNode);
    };
    DataFlow.prototype.createLink = function (node) {
        node.$nodeLink = $('<img src="link.png" class="flow-node-link"/>').addClass(this.options.direction);
        if(!node.last){
            this.$el.append(node.$nodeLink);
        }
    };
    DataFlow.prototype.repaint = function () {

    };
    window.DataFlow = DataFlow;
})();