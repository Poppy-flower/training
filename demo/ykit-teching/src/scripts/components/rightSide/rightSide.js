import React from 'react';

class RightSide extends React.Component {

    constructor(props){
        super(props);
    }

    handleChangeSpade(e,spade){
        var video = document.getElementById('my-player');
        video.playbackRate = spade;
        var ctrl = document.getElementById("ctrl");
        for(var i=0,l=ctrl.childNodes.length;i<l;i++){
            ctrl.childNodes[i].className = '';
        }
        e.target.className = 'checked';
        return false;

    }

    render() {
        var {src} = this.props;
        if(!!src){
            return <div className="right-side">
                <div className="welcome">欢迎来学习课程</div>
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
                    <div className="control" id='ctrl'>
                        播放速度：
                        <a href="#" className="" onClick={(e)=>this.handleChangeSpade(e,0.5)}>0.5倍</a>
                        <a href="#" className="" onClick={(e)=>this.handleChangeSpade(e,0.75)}>0.75倍</a>
                        <a href="#" className="checked" onClick={(e)=>this.handleChangeSpade(e,1)}>1倍</a>
                        <a href="#" className="" onClick={(e)=>this.handleChangeSpade(e,1.5)}>1.5倍</a>
                        <a href="#" className="" onClick={(e)=>this.handleChangeSpade(e,2)}>2倍</a>
                        <a href="#" className="" onClick={(e)=>this.handleChangeSpade(e,2.5)}>2.5倍</a>
                        <a href="#" className="" onClick={(e)=>this.handleChangeSpade(e,3)}>3倍</a>
                    </div>
                </div>
            </div>
        }else{
            return <div className="right-side">
                <div className="home-box">
                    <div className="welcome">欢迎来到十一贝学习课堂</div>
                    <div className="we-img-box">
                        <img className='we-img'  src="//04.imgmini.eastday.com/mobile/20180528/20180528073704_f793b9d8bc29173786847c83e7558612_1.jpeg" alt=""/>
                    </div>
                    <div className="video-box" id='hide-video-box'>
                        <video
                            id="my-player"
                            className="video-js vjs-big-play-centered video-box"
                            controls
                            preload="auto"
                            width="80%"
                            height="80%"
                            poster= {''}
                            data-setup='{}'>
                            <source src={''} type="video/mp4"></source>
                        </video>
                    </div>
                </div>
            </div>
        }
    }
}


export default RightSide;