import React from 'react';
import LeftTree from '../leftTree/leftTree.js';
import RightSide from '../rightSide/rightSide.js';

import 'antd/dist/antd.css';

const jsonData = require('./data.json');

class Select extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            renderDate:jsonData.data,
            selected: '',   //选中的叶子节点的key
            src: '', //展示的对应叶子节点的src
            defaultExpandedKeys: []  //默认展开的树节点
        };
    }

    /**
     * func 从url取key=name 的参数
     * @param name
     * @returns {*}
     */
    getQuery(name) {
        var reg = new RegExp('(^|&?)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.match(reg);
        if (r !== null){
            return decodeURIComponent(r[2]);
        }else{
            return null;
        }
    }

    componentWillMount(){
        var selected = this.getQuery('selected')|| '';
        var src = this.getQuery('src')||'';

        if(!!selected){
            var defaultExpandedKeys = this.state.defaultExpandedKeys;
            defaultExpandedKeys.push(selected);
            this.setState({
                selected: selected,
                src: src,
                defaultExpandedKeys: defaultExpandedKeys
            });
        }else{
            this.setState({
                selected: selected,
                src: src
            });
        }
    }

    /**
     * func 点击左侧的叶子节点
     * 步骤：
     * 1. 如果是叶子节点
     *     1.1.  取点击的叶子节点的 src  和 key
     *     1.2.  刷新 （替换src 和 selected = key）
     *     1.3   选中的就是从路径里取的
     * 2. 如果是非叶子的树节点
     *     2.1   折叠的话，就展开
     *           展开的话，就折叠
     *     2.2   选中的不变
     */
    handleSelect(){
        var _this = this;
        var {defaultExpandedKeys} = this.state;
        return (keyArr, e)=>{
            var isLeaf = e.node.props['isLeaf'];
            var key = '', src = '';
            console.log(isLeaf);
            if(isLeaf){
                //叶子节点，刷新页面，获取新的内容
                key = keyArr[0];
                src = e.node.props['src'];
                window.location.href = '?src=' + src + '&selected=' + key;
            }else{
                //非叶子节点
                key = keyArr[0];
                var i = defaultExpandedKeys.indexOf(key);
                if(i >=0){
                    defaultExpandedKeys.splice(i,1);
                }else{
                    defaultExpandedKeys.push(key);
                }
                console.log(defaultExpandedKeys);
                _this.setState({
                    defaultExpandedKeys: defaultExpandedKeys
                });
            }
        };
    }

    render() {
        var {renderDate, selected, src, defaultExpandedKeys} = this.state;
        return (
            <div className='content'>
                <LeftTree
                    renderDate = {renderDate}
                    selected = {selected}
                    src={src}
                    onSelect={this.handleSelect()}
                    defaultExpandedKeys={defaultExpandedKeys}
                />
                <RightSide
                    src = {src}
                />
            </div>
        );
    }
}


export default Select;