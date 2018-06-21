import React from 'react';

import Select from './components/select/select.js';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
           <div>
               <Select/>
           </div>
        )
    }
}

export default App;
