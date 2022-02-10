import React from 'react';
import { BackTop } from 'antd';
import { LineOutlined,UpOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './mybackup.css';

function Mybackup() {
    return (
        <BackTop visibilityHeight={1}>
            <div className="backtop">
                <i className="flexicon">
                    <UpOutlined />
                    <LineOutlined/>
                </i>
            </div>
        </BackTop>
    )
}

export default Mybackup
