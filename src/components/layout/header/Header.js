import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../../img/logo-transparent.png';
import './Header.scss';

class Header extends Component{

    constructor(props){
        super(props)
    }

    pageIsSelected(currentPage, checkPage)
    {
        // if(currentPage === checkPage)
        // {
        //     return "selected-page"
        // }
        return ""
    }
    

    render() {
        var headerClass = "static-header";
        if(this.props.page !== "contact" && this.props.page !== "sponsors"){
            headerClass = "header"
            window.onscroll = function() {
                try{
                var currentScrollPos = window.pageYOffset;
                if(currentScrollPos > 50)
                {
                    (document.getElementById("header")).style.backgroundColor="#fff";
                    (document.getElementById("header")).style.boxShadow="3px 3px 10px grey";
                    (document.getElementById("header")).style.color="#333";
                }
                else{
                    (document.getElementById("header")).style.background="none";
                    (document.getElementById("header")).style.boxShadow="none";
                    (document.getElementById("header")).style.color="#fff";
                }
            }catch{}
            }
        }

        return (
            <div>
                <link href="https://fonts.googleapis.com/css?family=Rajdhani:520,600|Ubuntu&display=swap" rel="stylesheet"/>
            <div id="header-container">
            <div className="tracker-backgound">
                <div id={`${headerClass}`}>
                    <div className="logo">
                    <Link className="logo-image" to="/">
                        <img src={logoImage} className="logo-image" alt=""></img> 
                    </Link>
                    <Link className="logo-text" to="/">MAC FORMULA ELECTRIC</Link>
                    </div>

                    <input type="checkbox" id="toggle"></input>
                    <div className="hamburger"><div>
                    </div></div>
                    <ul className="nav-bar">               
                        <li className={`nav-bar-item ${this.pageIsSelected("about", this.props.page)}`}>
                             <Link to="/about">About</Link>
                        </li> 
                        <li className={`nav-bar-item ${this.pageIsSelected("recruitment", this.props.page)}`}>
                            <Link to="/recruitment">Recruitment</Link>
                        </li>   
                        <li className={`nav-bar-item ${this.pageIsSelected("sponsors", this.props.page)}`}>
                            <Link to="/sponsors">Sponsors</Link>
                        </li> 

                        <li className={`nav-bar-item ${this.pageIsSelected("contact", this.props.page)}`}>
                            <Link to="/contact">Contact</Link>
                        </li>
                        {/* <li className="nav-bar-item-donate-button"> */}
                        <li className={`nav-bar-item ${this.pageIsSelected("donate", this.props.page)}`}>
                        <Link to="/donate">Donate</Link>
                        </li>
                    </ul>
                </div>
                

                </div>
            </div>
            {/* <div className="top-buffer"></div> */}
            </div>
        );
    }
}

export default Header;