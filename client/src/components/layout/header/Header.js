import React, {Component} from '../../../../node_modules/react';
import { Link } from '../../../../node_modules/react-router-dom';
import logoImage from '../../../img/MFElogo.png';
import './Header.scss';

class Header extends Component{
    pageIsSelected(currentPage, checkPage)
    {
        if(currentPage === checkPage)
        {
            return "selected-page"
        }
        return ""
    }

    render() {
        return (
            <div>
            <div className="header-container">
            <div className="tracker-backgound">
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
                        <li className={`nav-bar-item ${this.pageIsSelected("about", this.props.page)}`}>
                             <Link to="/about">About</Link>
                        </li> 
                        <li className={`nav-bar-item ${this.pageIsSelected("sponsors", this.props.page)}`}>
                            <Link to="/sponsors">Sponsors</Link>
                        </li> 
                        <li className={`nav-bar-item ${this.pageIsSelected("recruitment", this.props.page)}`}>
                            <Link to="/recruitment">Recruitment</Link>
                        </li>   
                        <li className={`nav-bar-item ${this.pageIsSelected("contact", this.props.page)}`}>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li className="nav-bar-item-donate-button">
                        `<Link to="/">Donate</Link>
                        </li>
                    </ul>
                </div>
                

                </div>
            </div>
            <div className="top-buffer"></div>
            </div>
        );
    }
}

export default Header;