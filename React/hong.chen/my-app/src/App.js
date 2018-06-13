import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CheckboxGroup from './checkboxGroup/checkboxGroup.js';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: [
                {text: '飞机', value: 1},
                {text: '相机', value: 2},
                {text: '蛋炒饭', value: 3},
            ],
            checked: [1, 3]
        };
    }

    onChange(checked){
        this.setState({
            checked: checked
        });
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <div>
                    <CheckboxGroup
                        data={this.state.data}
                        checkedArr={this.state.checked}
                        onChange={this.onChange.bind(this)}
                    />
                    <div>
                        选中值：{this.state.checked.join(',')}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
