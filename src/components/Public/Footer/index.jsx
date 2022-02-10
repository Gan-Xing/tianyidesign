import React from 'react';
import { Input } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import wechat from "../../../img/weixin.jpg";
import 'antd/dist/antd.css';
import "./footer.css";

function emailRegister(e) {
    console.log(e.target.value)
}

function Footer() {
    return (
        <div className="footer">
            <div className="footercontent flexbox">
                <div className="wechat flex-column">
                    <img src={wechat} alt="#" />
                    <span>关注天奕公众平台</span>
                </div>
                <div className="caselink flex-column">
                    <div className="linktitle">案例</div>
                    <div className="footlink">室内设计</div>
                    <div className="footlink">平面设计</div>
                    <div className="footlink">绘本插画</div>
                    <div className="footlink">网页设计</div>
                </div>
                <div className="uslink flex-column">
                    <div className="linktitle">关于我们</div>
                    <div className="footlink">天奕文化</div>
                    <div className="footlink">设计团队</div>
                </div>
                <div className="contactlink flex-column">
                    <div className="linktitle">联系我们</div>
                    <div className="footlink">设计服务</div>
                    <span>如有不解或疑问可以随时联系我们。</span>
                    <Input onPressEnter={emailRegister}size="large" placeholder="输入您的邮箱" type="email" prefix={<MailOutlined />} />
                </div>
            </div>
            <div className="authorites">
                <p>copyright@2011-2019 北京天奕时代创意设计有限公司&nbsp;
                    <a href="https://beian.miit.gov.cn">&nbsp;京ICP备19026676号-1</a>
                </p>
            </div>
        </div>
    )
}

export default Footer
