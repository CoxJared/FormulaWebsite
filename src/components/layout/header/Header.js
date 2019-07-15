import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logoImage from './../../../img/MFElogo.png';
import './Header.scss';

class Header extends Component{
    render() {
        return (
            <div className="header-container">
                <div className="header">
                    <div className="logo">
                    <Link className="logo-image" to="/">
                        <img src={logoImage} className="logo-image" alt=""></img> 
                        </Link>
                        <Link className="logo-text" to="/">MAC FORMULA ELECTRIC</Link>
                    </div>

                    {/* <div className="spacer" /> */}
                    <input type="checkbox" className="toggle"></input>
                    <div className="hamburger"><div>
                    </div></div>
                    <ul className="nav-bar">               
                        <li className="nav-bar-item">
                            <Link to="/about">About</Link>
                        </li> 
                        <li className="nav-bar-item">
                            <Link to="/sponsors">Sponsors</Link>
                        </li> 
                        <li className="nav-bar-item">
                            <Link to="/events">Events</Link>
                        </li>   
                        <li className="nav-bar-item">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-buffer"></div>
            </div>
        );
    }
}

export default Header;