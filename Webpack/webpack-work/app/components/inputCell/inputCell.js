import React from 'react';

import {Input, Icon} from 'antd';
import 'antd/dist/antd.css';
import './inputCell.css';

const CELLRULES = {
    'line': new RegExp(/^[0-9]*$/),
    'startTime': new RegExp(/^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$/),
    'spaceTime': new RegExp(/^([0-5][0-9]):([0-5][0-9])$/),
    'toXiaoMing': new RegExp(/^[0-9]*$/),
    'toCompany': new RegExp(/^[0-9]*$/),
    'running': new RegExp(/^([0-5][0-9]):([0-5][0-9])$/),
    'stopTime': new RegExp(/^([0-5][0-9]):([0-5][0-9])$/),
};

class InputCell extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: this.props.value,
            type: this.props.type,
            editable: this.props.editable
        };
    }

    /**
     * func input输入框的change  函数
     * @param e
     */
    handleChange(e){
        const value = e.target.value;
        this.setState({
            value : value
        });
    }

    /**
     * func  确定函数
     */
    check(){
        const { onChange} = this.props;
        const {value, type} = this.state;
        if(value.match(CELLRULES[type])){
            this.setState({
                editable: false
            });
            if(onChange){
                onChange(this.state.value);
            }
        }else{
            alert('请输入合法的值！');
        }

    }

    /**
     * func 点击开始编辑
     */
    edit(){
        this.setState({
            editable: true
        });
    }

    render(){
        let {value, editable} = this.state;
        return (<div className='editable-cell'>
            {
                editable?(
                    <Input
                        value={value}
                        onChange={(e)=>this.handleChange(e)}
                        suffix={
                            <Icon
                                type='check'
                                className='editable-cell-icon-check'
                                onClick={()=>this.check()}
                            />
                        }
                    />
                ):(
                    <div className='value-box' style={{paddingRight: 24}}>
                        {value ||''}
                        <Icon
                            type='edit'
                            className='editable-cell-icon'
                            onClick={()=>this.edit()}
                        />
                    </div>
                )
            }
        </div>);
    }
}

export default InputCell;