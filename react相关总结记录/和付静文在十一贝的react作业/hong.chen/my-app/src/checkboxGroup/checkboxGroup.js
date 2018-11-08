import React, { Component } from 'react';
import './index.css';

class CheckboxGroup extends Component {

    constructor(props){
        super(props);
    }

    handleChange(value){
        let {checkedArr=[], onChange} = this.props;
        var n=checkedArr.indexOf(value-0);
        if(n>=0){
            checkedArr.splice(n,1);
        }else{
            checkedArr.push(value-0);
            checkedArr.sort(function(a,b){
                return a-b;
            });
        }
        if(onChange)
            onChange(checkedArr);
    }

    render() {
        const {data=[]} = this.props;
        return (
            <div>
                {
                    data.map((item,index)=>{
                        return <div className="item">
                            <input onChange={(e)=>{this.handleChange(e.target.value)}}
                                   key={index}
                                   type="checkbox"
                                   name="checks"
                                   value={item.value}
                                   defaultChecked={checkedArr.indexOf(item.value)>=0}/>
                            {item.text}
                        </div>
                    })
                }
            </div>
        );
    }
}

export default CheckboxGroup;
