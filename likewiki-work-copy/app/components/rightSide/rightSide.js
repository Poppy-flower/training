import React from 'react';

import 'antd/dist/antd.css';

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
                <div className="video-box">
                    <video
                        id="my-player"
                        className="video-js vjs-big-play-centered video-box"
                        controls
                        preload="auto"
                        width="80%"
                        height="80%"
                        poster= {`${src}.JPG`}
                        data-setup='{}'>
                        <source src={`${src}.mp4`} type="video/mp4"></source>
                    </video>
                </div>
            </div>
        }else{
            return <div className="right-side">
                <div className="home-box">
                    欢迎来到首页！
                </div>
            </div>
        }
    }
}


export default RightSide;