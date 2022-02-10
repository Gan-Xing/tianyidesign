/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{Component} from "react";
import { Link } from 'react-router-dom';
import { CaretDownOutlined} from '@ant-design/icons';
import logo from '../../../img/logo.png';
import "antd/dist/antd.css";
import './navbar.css'

class Navbar extends Component {
    state ={
        show:false,
    }
    changeStyle = () => {
        this.setState({ show: !this.state.show });
    }
    render() { 
        const { scroll } = this.props;
        return (
            <div className={scroll ? "navbar fixedbar":"navbar"}>
                <div className={scroll ? "navbar-brand small-img":"navbar-brand"}>
                    <img src={logo} alt="logo"/>
                    <Link to="/index">天奕设计</Link>
                </div>
                <div className="navbar-content">
                    <div className="navbar-button" onClick={this.changeStyle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className={this.state.show ? "pull-it-down" : "pull-it-up"}>
                        <li className="navitem">
                            <Link to="/index">主页</Link>
                        </li>
                        <li className="navitem">
                            <Link to="/page97">业务范围</Link>
                        </li>
                        <li className="navitem successcases">
                            <a href="#">成功案例<CaretDownOutlined/></a>
                            <ul className="dropdown-menu">
                                <li className="successcase">
                                    <Link to="/page127">
                                        <svg height="14" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M0 15.5c.004.276.224.504.5.5h26c.66 0 .664-1 0-1H.5c-.282-.004-.504.218-.5.5zm15 14c0 .45.554.663.854.354l14-14c.195-.195.195-.51 0-.707l-14-14c-.426-.443-1.167.248-.707.707L28.793 15.5 15.147 29.148c-.098.095-.147.218-.147.353z"/></svg>
                                        室内设计
                                    </Link>
                                </li>
                                <li className="successcase">
                                    <Link to="/page152">
                                        <svg height="14" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M0 15.5c.004.276.224.504.5.5h26c.66 0 .664-1 0-1H.5c-.282-.004-.504.218-.5.5zm15 14c0 .45.554.663.854.354l14-14c.195-.195.195-.51 0-.707l-14-14c-.426-.443-1.167.248-.707.707L28.793 15.5 15.147 29.148c-.098.095-.147.218-.147.353z"/></svg>
                                        平面设计
                                    </Link>
                                </li>
                                <li className="successcase">
                                    <Link to="/page151">
                                        <svg height="14" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M0 15.5c.004.276.224.504.5.5h26c.66 0 .664-1 0-1H.5c-.282-.004-.504.218-.5.5zm15 14c0 .45.554.663.854.354l14-14c.195-.195.195-.51 0-.707l-14-14c-.426-.443-1.167.248-.707.707L28.793 15.5 15.147 29.148c-.098.095-.147.218-.147.353z"/></svg>
                                        绘本插画
                                    </Link>
                                </li>
                                <li className="successcase">
                                    <Link to="/page157">
                                        <svg height="14" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M0 15.5c.004.276.224.504.5.5h26c.66 0 .664-1 0-1H.5c-.282-.004-.504.218-.5.5zm15 14c0 .45.554.663.854.354l14-14c.195-.195.195-.51 0-.707l-14-14c-.426-.443-1.167.248-.707.707L28.793 15.5 15.147 29.148c-.098.095-.147.218-.147.353z"/></svg>
                                        网站设计
                                    </Link>
                                </li>
                            </ul>
                            {/* <Dropdown overlay={menu}>
                                <a href="#" className="ant-dropdown-link">
                                成功案例 <CaretDownOutlined />
                                </a>
                            </Dropdown> */}
                        </li>
                        <li className="navitem">
                            <Link to="/page98">设计师</Link>
                        </li>
                        <li className="navitem">
                            <Link to="/page52">关于天奕</Link>
                        </li>
                        <li className="navitem">
                            <Link to="/page2">联系我们</Link>
                        </li>
                        <li className="navitem iconphone">
                            <Link to="/page2">
                                <svg fill="#fff" height="20" viewBox="0 0 30 30" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 27a1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1zM13.5 2h3c.277 0 .5.223.5.5s-.223.5-.5.5h-3c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm-6-2C6.678 0 6 .678 6 1.5v27c0 .822.678 1.5 1.5 1.5h15c.822 0 1.5-.678 1.5-1.5v-27c0-.822-.678-1.5-1.5-1.5h-15zm0 1h15c.286 0 .5.214.5.5v27c0 .286-.214.5-.5.5h-15c-.286 0-.5-.214-.5-.5v-27c0-.286.214-.5.5-.5z"/></svg>
                            </Link>
                        </li>
                        <div className="whitebutton">
                            <a className="white-outline" href="tel:400-187-0567"></a>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default Navbar;
