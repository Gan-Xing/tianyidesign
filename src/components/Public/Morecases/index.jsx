/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import miaomiao from "../../../img/4.jpg";
import jianghe from "../../../img/11.jpg";
import xunyueji from '../../../img/5.jpg';
import shinei from "../../../img/6.jpg";
import kecanting from "../../../img/7.jpg";
import yazi from "../../../img/8.jpg";
import './morecases.css'

function Morecases() {
    return (
        <div className="morecases">
            <h2>客户案例</h2>
            <div className="line"></div>
            <div className="cases flexbox">
                <div className="exhibition">
                    <a href="#" className="casepic">
                        <img src={miaomiao} alt="miaomiaoxue"/>
                    </a>
                    <div className="companydesc">
                        <strong>秒秒学</strong>
                        <p>网站案例</p>
                    </div>
                </div>
                <div className="exhibition">
                    <a href="#" className="casepic">
                        <img src={jianghe} alt="jianghe"/>
                    </a>
                    <div className="companydesc">
                        <strong>江河地产</strong>
                        <p>地产平面设计</p>
                    </div>
                </div>
                <div className="exhibition">
                    <a href="#" className="casepic">
                        <img src={xunyueji} alt="xunyueji"/>
                    </a>
                    <div className="companydesc">
                        <strong>寻越记药膳养生鸡</strong>
                        <p>LOGO设计</p>
                    </div>
                </div>
                <div className="exhibition">
                    <a href="#" className="casepic">
                        <img src={shinei} alt="shinei"/>
                    </a>
                    <div className="companydesc">
                        <strong>现代简约室内设计</strong>
                        <p>室内设计案例</p>
                    </div>
                </div>
                <div className="exhibition">
                    <a href="#" className="casepic">
                        <img src={kecanting} alt="kecanting"/>
                    </a>
                    <div className="companydesc">
                        <strong>北欧复工楼客餐厅</strong>
                        <p>效果图设计</p>
                    </div>
                </div>
                <div className="exhibition">
                    <a href="#" className="casepic">
                        <img src={yazi} alt="yazi"/>
                    </a>
                    <div className="companydesc">
                        <strong>孤独的鸭子镇长</strong>
                        <p>手绘案例</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Morecases
