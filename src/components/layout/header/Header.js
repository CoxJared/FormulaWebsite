import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logoImage from './../../../img/MFElogo.png';
import './Header.css';

class Header extends Component{
    render() {
        return (
            <div className="header-container">
                <div className="header">

                    <div className="logo">
                        <img src={logoImage} className="logo-image" alt=""></img> 
                        <Link className="logo-text" to="/">MAC FORMULA ELECTRIC</Link>
                    </div>

                    <div className="spacer" />

                    <ul className="nav-bar">

                        <li className="nav-bar-item">
                            <Link to="/contact">Contact</Link>
                        </li>

                        <li className="nav-bar-item">
                            <Link to="/sponsors">Sponsors</Link>
                        </li>

                        <li className="nav-bar-item">
                            <Link to="/events">Events</Link>
                        </li>      
        
                        <li className="nav-bar-item dropdown">
                            <a className="dropbtn" href="#">About</a>
                            
                            <div className="dropdown-content">
                                <Link to="/design">Design</Link>
                                <Link to="/team">Team</Link>
                            </div>
                        </li>              

                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;