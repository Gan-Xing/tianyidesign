import React,{Component} from "react";
import { Carousel } from 'antd';
import frontcover1 from '../../../img/1.jpg';
import frontcover2 from '../../../img/2.jpg';
import frontcover3 from '../../../img/3.jpg';
import './mycarousel.css'


class Mycarousel extends Component {
    switchPic = React.createRef()
    render() { 
        return (
            <div className="homecarousel">
                <Carousel autoplay ref={this.switchPic}>
                    <div>
                        <div className="pic" style={{backgroundImage:`url(${frontcover1})`}}></div>
                    </div>
                    <div>
                        <div className="pic" style={{backgroundImage:`url(${frontcover2})`}}></div>
                    </div>
                    <div>
                        <div className="pic" style={{backgroundImage:`url(${frontcover3})`}}></div>
                    </div>
                </Carousel>
                <div className="arrow arrowright" onClick={()=>this.switchPic.current.next()}>
                    <svg height="30" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M0 15.5c.004.276.224.504.5.5h26c.66 0 .664-1 0-1H.5c-.282-.004-.504.218-.5.5zm15 14c0 .45.554.663.854.354l14-14c.195-.195.195-.51 0-.707l-14-14c-.426-.443-1.167.248-.707.707L28.793 15.5 15.147 29.148c-.098.095-.147.218-.147.353z"/></svg>
                </div>
                <div className="arrow arrowleft" onClick={()=>this.switchPic.current.prev()}>
                    <svg height="30" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M30 14.5c-.004.276-.224.504-.5.5h-26c-.66 0-.664-1 0-1h26c.282-.004.504.218.5.5zm-15 14c0 .45-.554.663-.854.354l-14-14c-.195-.196-.195-.512 0-.708l14-14c.426-.442 1.167.248.708.708L1.207 14.5l13.647 13.646c.097.095.146.22.146.354z"/></svg>
                </div>
            </div>
        );
    }
}
 
export default Mycarousel;