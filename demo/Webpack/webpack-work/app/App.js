import React from 'react';

import TimeTable from './components/timeTable/timeTable.js';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
           <div>
               <TimeTable/>
           </div>
        )
    }
}

export default App;
