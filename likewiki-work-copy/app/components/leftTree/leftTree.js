import React from 'react';
import{Tree} from 'antd';
const TreeNode = Tree.TreeNode;

import 'antd/dist/antd.css';

class LeftTree extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        var {renderDate, src, selected, onSelect, defaultExpandedKeys} = this.props;
        var selectedKeys = [];
        selectedKeys.push(selected);

        console.log(defaultExpandedKeys);

        /**
         * func  轮询
         * @param data
         */
        const loop = data => data.map((item) => {
            if (item.children && item.children.length) {
                return <TreeNode
                    key = {item.key}
                    title = {item.title}
                    isLeaf = {false}>{loop(item.children)}</TreeNode>;
            }
            return <TreeNode
                key = {item.key}
                title = {item.title}
                src = {item.src}
                isLeaf = {true}
            />;
        });

        return (
            <Tree
                className="draggable-tree left-tree"
                onSelect = {onSelect}
                selectedKeys={selectedKeys}
                defaultExpandedKeys = {defaultExpandedKeys}
            >
                {loop(renderDate)}
            </Tree>
        );
    }
}


export default LeftTree;