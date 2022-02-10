import React from 'react';
import brand from "../../../../img/mbri-website-theme.svg";
import users from "../../../../img/mbri-users.svg";
import interact from "../../../../img/mbri-image-slider.svg";
import view from "../../../../img/mbri-image-gallery.svg";
import "./index.css"

function Solution() {
    return (
        <>
            <div className="intro">
                <h2>----我们能做什么----</h2>
                <h1>以用户为核心的整合设计解决方案</h1>
            </div>
            <div className="flexbox solution">
                <div className="tablewrap">
                    <div className="table">
                        <div className="solutitle">
                            <img src={brand} alt="branddesign" width="53" height="53"/>
                            <h2>品牌设计</h2>
                        </div>
                        <hr/>
                        <div className="solucontent">
                            <h3>我们洞察市场需求及用户痛点，为企业建立切实可行的互联网产品策略。</h3>
                        </div>
                    </div>
                </div>
                <div className="tablewrap">
                    <div className="table">
                        <div className="solutitle">
                            <img src={users} alt="branddesign" width="53" height="53"/>
                            <h2>用户体验</h2>
                        </div>
                        <hr/>
                        <div className="solucontent">
                            <h3>综合运用现场观察、深入访谈、焦点小组等方法，来获得用户需求及产品使用偏好。</h3>
                        </div>
                    </div>
                </div>
                <div className="tablewrap">
                    <div className="table">
                        <div className="solutitle">
                            <img src={interact} alt="branddesign" width="53" height="53"/>
                            <h2>交互设计</h2>
                        </div>
                        <hr/>
                        <div className="solucontent">
                            <h3>基于用户研究分析，建立符合用户使用场景和用户真正需求的交互模型。</h3>
                        </div>
                    </div>  
                </div>
                <div className="tablewrap">
                    <div className="table">
                        <div className="solutitle">
                            <img src={view} alt="branddesign" width="53" height="53"/>
                            <h2>视觉设计</h2>
                        </div>
                        <hr/>
                        <div className="solucontent">
                            <h3>打造高品质专属于本企业的产品视觉设计，让用户第一眼就喜欢上。</h3>
                        </div>
                    </div>  
                </div>
            </div> 
        </>
    )
}

export default Solution
