import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logoImage from './../../img/logo-transparent.png';
import './Header.scss';

class Header extends Component{

    constructor(props){
        super(props)
    }

    pageIsSelected(currentPage, checkPage)
    {
        return ""
    }
    

    render() {
        var headerClass = "static-header";
        if( document.body.offsetWidth>800){
            headerClass = "header"
            window.onscroll = function() {
                try{
                var currentScrollPos = window.pageYOffset;
                if(currentScrollPos > 50)
                {
                    (document.getElementById("header")).style.color="#333";
                    (document.getElementById("header")).style.backgroundColor="#fff";
                    (document.getElementById("header")).style.boxShadow="3px 3px 10px grey";
                    
                }
                else{
                    (document.getElementById("header")).style.color="#fff";
                    (document.getElementById("header")).style.background="none";
                    (document.getElementById("header")).style.boxShadow="none";
                    
                }
            }catch{}
            }
        }
        if(document.body.offsetWidth < 800) {

        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos < (currentScrollPos +1) ) {
            document.getElementById("toggle").checked = false;
            if(currentScrollPos > 90)
            {
                (document.getElementById("header-container")).style.top="-90px";
            }
            else{
                (document.getElementById("header-container")).style.top="-".concat(currentScrollPos,"px");
            }
        } else {
            (document.getElementById("header-container")).style.top="0" ;
        }
        prevScrollpos = currentScrollPos;
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
                        <li className={`nav-bar-item ${this.pageIsSelected("donate", this.props.page)}`}>
                        <Link to="/donate">Donate</Link>
                        </li>
                    </ul>
                </div>
                

                </div>
            </div>
            {document.body.offsetWidth > 800 ? <div /> : <div className="top-buffer"></div>}
            </div>
        );
    }
}

export default Header;