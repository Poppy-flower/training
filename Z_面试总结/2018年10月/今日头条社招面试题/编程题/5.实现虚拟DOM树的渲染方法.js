/**
 * 用JS表示DOM结构
 * @param tagName
 * @param props
 * @param children
 * @constructor
 */


//虚拟DOM，参数分别为标签名，属性对象，子DOM列表
var VElement = function(tagName, props, children){
    //保证只能通过如下方式调用
    if(!(this instanceof VElement)){
        return new VElement(tagName, props, children);
    }

    //可以通过只传递tagName和children参数
    if(Object.prototype.toString().call(props) === 'object Array'){
        this.children = props;
        this.props = {};
    }

    //设置虚拟DOM的相关属性
    this.tagName = tagName;
    this.props = props || {};
    this.children = children || [];

    this.key = props? props.key : void 666;
    var count = 0;

    this.children.map(function(child, i){
        if(child instanceof VElement){
            count += child.count;
        }else{
            children[i] = '' + child;
        }
        count++;
    });
    this.count = count;
};

//通过VElement,我们可以很简单的用JS表示DOM结构
var vdom = VElement('div',
    {'id': 'container'},
    [
        VElement('h1', {style: 'color: red'}, ['simple virtual dom']),
        VElement('p', ['hello world']),
        VElement('ul', [
            VElement('li', ['item#1']),
            VElement('li', ['item#2'])
        ])
    ]);

//根据虚拟DOM树创建出真实的dom树
VElement.prototype.render = function(){
    //创建标签
    var el = document.createElement(this.tagName);

    //设置标签的属性
    var props = this.props;
    for(var propName in props){
        var propValue = props[propName];
        el.setAttribute(propName, propValue);
    }

    //依次创建子节点的标签
    this.children.map(function(child){
        //如果子节点为VElement类型，递归创建子节点，否则创建文本节点
        var childEl = (child instanceof VElement)? child.render() : document.createTextNode(child);
        el.appendChild(childEl);
    });
    return el;
};

//对一个虚拟的DOM对象，调用其原型的render方法，就能产生一颗真实的DOM树
/**
 * 既然我们可以用js来表示虚拟的DOM树，那么当数据状态发生变化， 需要改变DOM结构时，
 * 我们通过js对象表示的虚拟DOM计算出实际DOMx需要做的最小的变动，
 * 然后再操作DOM，我们就能减少由于频繁的操作DOM来导致的性能问题了。
 */

