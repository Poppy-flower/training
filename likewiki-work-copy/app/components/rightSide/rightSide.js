import React from 'react';

class RightSide extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        var {src} = this.props;

    }

    render() {
        var {src} = this.props;
        if(!!src){
            return <div className="right-side">
                {src}
            </div>
        }else{
            return <div className="right-side">
                这是欢迎页面
            </div>
        }
    }
}


export default RightSide;