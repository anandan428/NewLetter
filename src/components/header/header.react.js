import React, { Component } from 'react';
import './header.css';
import logo from './../../assets/images/volvoLogo.jpg';
// import moment from 'moment';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }
    render() {
        return (
            <div>
                <View />
            </div>
        )
    }
}

export default Header;

class View extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="topDiv">
                <div className="positionRelative maxWidth height65 paddingHorizontal marginAuto justifyContent flexCenter zIndex500">
                    <div className="flex">
                        <div >
                            <img src={logo} width="60" height="55" />
                        </div>
                        <div className="title" style={{"marginLeft": "335px", "marginTop": "12px" }} >
                            News Letter
                        </div>
                    </div>
                </div>
                <div className="positionRelative maxWidth height25 paddingHorizontal marginAuto justifyContent flexCenter zIndex500">
                    <nav role="navigation">
                        <div className="flexTop">
                            <li>
                                <span className="navText">
                                    <a href="">Home</a>
                                </span>
                            </li>
                            <li>
                                <span className="navText">
                                    <a href="">General</a>
                                </span>
                            </li>
                            <li>
                                <span className="navText">
                                    <a href="">Technical</a>
                                </span>
                            </li>
                            <li>
                                <span className="navText">
                                    <a href="">Success</a>
                                </span>
                            </li>
                            <li>
                                <span className="navText">
                                    <a href="">Awards</a>
                                </span>
                            </li>
                            <li>
                                <span className="navText">
                                    <a href="">Did You</a>
                                </span>
                            </li>
                            <li>
                                <span className="navText">
                                    <a href="">Archive</a>
                                </span>
                            </li>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
