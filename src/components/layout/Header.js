import React, {Component} from 'react';
import './../../App.css';

class Header extends Component{
    render() {
        return (
            <div className="headerStyle">
                <img src={'./../../img/MFElogo.png'} alt="logo"></img>
                <ul className="listStyle">
                    <li className="listItemStyle"><a href = "">Home</a></li>
                    <li className="listItemStyle">About</li>
                    <li className="listItemStyle">Events</li>
                    <li className="listItemStyle">Sponsors</li>
                </ul>
            </div>
        );
    }
}

export default Header;