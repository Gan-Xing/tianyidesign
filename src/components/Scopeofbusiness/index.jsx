/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect }  from 'react';
import './index.css'
// import Headernav from '../Homepage/Headernav';
import Navbar from '../Public/Navbar';
import Mycarousel from '../Public/Mycarousel';
import Mybackup from '../Public/Mybackup';
import Morecases from '../Public/Morecases';
import Footer from '../Public/Footer';
import {Scopeservices,Servicesprocess} from '../../data';
import graphicdesign from "../../img/12.jpg";
import interiordesign from "../../img/13.jpg";
import illustration from "../../img/14.jpg";


function Scopeofbusiness() {
    const [scroll, setScroll] = useState(false);
    const handleScroll=()=> {
        const data = document.documentElement.scrollTop||document.body.scrollTop;
        if(data>0){
            setScroll(true);
        }
        else {
            setScroll(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',handleScroll);
    }, [])
    return (
        <div className='scopearea'>
            <Navbar scroll={scroll}/>
            <Mycarousel />
            <Mybackup />
            <div className="scopeofbusiness">
                <h2>业务范围</h2>
                <div className="line"></div>
                <div className="flexbox scopepic">
                    <div className="exhibiscope">
                        <div className="scopewrap">
                            <div className="showpic">
                                <img src={graphicdesign} alt="graphicdesign"/>
                                <a href="#" className="picbutton">
                                    点击查看
                                <div className="shadowbutton"></div>
                                </a>
                            </div>
                            <div className="companydesc">
                                <strong>平面设计</strong>
                                <p>Logo设计、字体设计平面设计包括LOGO设计、字体设计、产品包装设计、电商设计、装帧设计、画册设计、海报设计、展架设计、单张设计等。</p>
                            </div>
                        </div>
                    </div>
                    <div className="exhibiscope">
                        <div className="scopewrap">
                            <div className="showpic">
                                <img src={interiordesign} alt="graphicdesign"/>
                                <a href="#" className="picbutton">
                                    点击查看
                                <div className="shadowbutton"></div>
                                </a>
                            </div>
                            <div className="companydesc">
                                <strong>室内设计</strong>
                                <p>工装设计和家装设计，主要室内方案设计、室内初步设计、室内施工图设计等。</p>
                            </div>
                        </div> 
                    </div>
                    <div className="exhibiscope">
                        <div className="scopewrap">
                            <div className="showpic">
                                <img src={illustration} alt="graphicdesign"/>
                                <a href="#" className="picbutton">
                                    点击查看
                                <div className="shadowbutton"></div>
                                </a>
                            </div>
                            <div className="companydesc">
                                <strong>绘本插画</strong>
                                <p>主要包括广告商业插画、卡通吉祥物设计、出版物插图、影视游戏美术设定、儿童绘本设计等。</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="services scope">
                <h2>更多服务</h2>
                <div className="line"></div>
                <div className="flexbox servicecontent">
                    {Scopeservices.map(service=>{
                        return (
                            <div className="service" key={service.id}>
                                <div className="servicenum">
                                    <span>{service.id}</span>
                                </div>
                                <h2>{service.h2}</h2>
                                <h3>{service.h3}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Morecases/>
            <div className="button">
                <a href="#">
                    <span>查看更多</span>
                </a>
            </div>
            <div className="services scope secondscope">
                <h2>服务流程</h2>
                <div className="line"></div>
                <div className="flexbox servicecontent">
                    {Servicesprocess.map(service=>{
                        return (
                            <div className="service" key={service.id}>
                                <div className="servicenum">
                                    <span>{service.id}</span>
                                </div>
                                <h2>{service.h2}</h2>
                                <h3>{service.h3}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Scopeofbusiness