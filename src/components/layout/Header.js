import React, {Component} from 'react';
import './../../App.css';
import { Link } from 'react-router-dom';

class Header extends Component{
    render() {
        return (
            <div className="header">
                {/* <img src={'./../../img/MFElogo.png'} alt="logo"></img> */}

                <ul className="listStyle">

                    <li className="listItemStyle">
                        <Link to="/">Home</Link>
                    </li>

                    <li className="dropdown">
                        <a className="dropbtn" href="#">About</a>
                        
                        <div className="dropdown-content">
                            <Link to="/design">Design</Link>
                            <Link to="/team">Team</Link>
                        </div>
                    </li>

                    <li className="listItemStyle">
                        <Link to="/events">Events</Link>
                    </li>

                    <li className="listItemStyle">
                        <Link to="/sponsors">Sponsors</Link>
                    </li>

                </ul>
            </div>
        );
    }
}

export default Header;