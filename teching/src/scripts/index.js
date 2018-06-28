import React from 'react'
import ReactDOM from 'react-dom'
import Select from './components/select/select.js';

class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Select/>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>, document.getElementById('app')
);

// hot-reload
if (module.hot) {
    module.hot.accept();
}
