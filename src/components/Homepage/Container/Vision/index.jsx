import React from 'react';
import './index.css';
import vision from "../../../../img/10.jpg";
function Vision() {
    return (
        <div className="vision flexbox">
            <div className="visionwrap flexbox">
                <div className="visiondetail">
                    <img src={vision} alt="vision" />
                </div>
                <div className="visiondetail">
                    <h3>天奕打造全球领先设计外包基地</h3>
                    <p>天奕的愿景，是让中国的设计领域，在人工智能时代能走在世界的前列。</p>
                    <p>天奕设计目前已形成了商业化的设计外包承接能力，开发了交互式快速学习的移动培养体系，建立了基于现代化体系的一整套设计师培养、就业和成长的人才培养基地，初步完成了人工智能辅助设计的AI系统。</p>
                    <p>更重要的是，我们建立了天奕开放平台，让大家能够利用我们的体系、技术、管理、营销等各个方面的能力，共同参与、共同盈利。</p>
                </div>
            </div>
        </div>
    )
}

export default Vision
