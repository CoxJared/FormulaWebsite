import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logoImage from './../../../img/MFElogo.png';
import './Header.css';

class Header extends Component{
    render() {
        return (
            <div className="header">
                <div className="logo">
                    <img src={logoImage} className="logo-image" alt=""></img> 
                    <h1 className="logo-text">MAC FORMULA ELECTRIC</h1>
                </div>
                <div className="spacer"></div>
                <ul className="nav-bar">

                    <li className="nav-bar-item">
                        <Link to="/">Home</Link>
                    </li>

                    <li className="dropdown">
                        <a className="dropbtn" href="#">About</a>
                        
                        <div className="dropdown-content">
                            <Link to="/design">Design</Link>
                            <Link to="/team">Team</Link>
                        </div>
                    </li>

                    <li className="nav-bar-item">
                        <Link to="/events">Events</Link>
                    </li>

                    <li className="nav-bar-item">
                        <Link to="/sponsors">Sponsors</Link>
                    </li>

                </ul>
            </div>
        );
    }
}

export default Header;