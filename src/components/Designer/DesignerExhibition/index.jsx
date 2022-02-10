/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState,useEffect,useRef} from 'react';
import { d_pic } from '../../../data';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import './Designer_exhibition.css'


function Designer_exhibition() {
    const [changePic, setchangePic] = useState(false);
    const [changeCarousel, setchangeCarousel] = useState(false);
    const switchPic2 = useRef(null);
    const handlePic =()=>{
        let clientW = document.documentElement.clientWidth;
        let clientH = document.documentElement.clientHeight;
        let dValue = clientW-clientH*1.3333
        if (dValue<0) {
            setchangePic(true)
        }
        else {
            setchangePic(false)
        }
    }
    useEffect(() => {
        window.addEventListener('resize',handlePic);
    }, [])

    function handleCarousel(page) {
        switchPic2.current.goTo(page);
        setchangeCarousel(true)
    }
    
    return (
        <div className="designer_exhibition">
            <h2>设计师作品</h2>
            <div className="line"></div>
            <div className="flexbox des_exhi">
                {d_pic.map((pic,index) => {
                    return(
                        <div className="exhibipic" key={index+1}>
                            <div className="designpic">
                                <div className="designpicture" onClick={()=>handleCarousel(index)}>
                                    <img src={pic} alt={index}/>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={changeCarousel? "designCarousel" : "designCarousel hidden"}>
                <Carousel ref={switchPic2}>
                    {d_pic.map((pic,index) => {
                        return(
                            <div className="picwrap" key={index+1}>
                                <div className={changePic ? "dpic changePic" : "dpic"} style={{backgroundImage:`url(${pic})`}}></div>
                            </div>
                        )
                    })}
                </Carousel>
                <div className="arrow arrowright" onClick={()=>switchPic2.current.next()}>
                    <svg height="30" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M0 15.5c.004.276.224.504.5.5h26c.66 0 .664-1 0-1H.5c-.282-.004-.504.218-.5.5zm15 14c0 .45.554.663.854.354l14-14c.195-.195.195-.51 0-.707l-14-14c-.426-.443-1.167.248-.707.707L28.793 15.5 15.147 29.148c-.098.095-.147.218-.147.353z"/></svg>
                </div>
                <div className="arrow arrowleft" onClick={()=>switchPic2.current.prev()}>
                    <svg height="30" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M30 14.5c-.004.276-.224.504-.5.5h-26c-.66 0-.664-1 0-1h26c.282-.004.504.218.5.5zm-15 14c0 .45-.554.663-.854.354l-14-14c-.195-.196-.195-.512 0-.708l14-14c.426-.442 1.167.248.708.708L1.207 14.5l13.647 13.646c.097.095.146.22.146.354z"/></svg>
                </div>
                <div className="arrow arrowclose" onClick={()=>setchangeCarousel(false)}>
                    <svg height="30" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M29.484 0c-.13.004-.252.057-.343.15L17.164 12.13c-.49.47.235 1.197.706.707L29.846.857c.325-.318.1-.857-.363-.857zM12.488 17c-.13.004-.25.058-.34.15L.162 29.14c-.486.467.233 1.186.7.7L12.848 17.85c.325-.313.093-.85-.36-.85zM.5 0a.5.5 0 0 0-.348.86L29.14 29.845a.5.5 0 1 0 .706-.706L.86.152A.5.5 0 0 0 .5 0z"/></svg>
                </div>
            </div>
        </div>
    )
}

export default Designer_exhibition