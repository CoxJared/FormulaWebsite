import React, { Component } from 'react';
import './Footer.css';



export class foot extends Component {
    render() {
        return (
            <div className="footer-container">
                <div className="footer">
                    <div className="name-container">
                        <p className="footer-name">MAC Formula Electric  &nbsp; | </p>
                        <div className="follow-list-container">
                        <ul>
                                <li><a href="https://twitter.com/macformula" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                                <li><a href="https://www.instagram.com/macformulaelectric/?hl=en" target="_blank" rel="noopener noreferrer">Instagram</a></li> 
                                <li><a href="https://www.facebook.com/MACFormulaElectric/" target="_blank" rel="noopener noreferrer">Facebook</a></li> 
                            </ul>
                            </div>
                    </div>
                     <div className="made-with-container">
                         <h1>Made With <span className="love">Love</span> In Canada</h1>
                    </div> 
                    
                </div>
            </div>
        )
    }
}

export default foot
