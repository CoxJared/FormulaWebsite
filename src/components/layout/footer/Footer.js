import React, { Component } from 'react';
import './Footer.css';



export class foot extends Component {
    render() {
        return (
            
            <div className="container">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div className="footer">
                    <div className="name">
                        <p>Mac Formula Eletric 2019&copy;</p>
                    </div>
                    <div className="follow">
                        <h1>Follow</h1>
                        <ul>
                            <li><a href="#" class="fa fa-facebook"></a></li>
                            <li><a href="#" class="fa fa-instagram"></a></li>
                            <li><a href="#" class="fa fa-github"></a></li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h1>Contact</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default foot