import React, { Component } from 'react';
import './MainShowcase.scss';

import Macfelogo from '../../../../img/logo-transparent.png';


class MainShowcase extends Component {

    render() {
        return (
            <div className="showcase-container">
                {/* <link href="https://fonts.googleapis.com/css?family=Assistant&display=swap" rel="stylesheet"/> */}
                <div className="showcase">
                    <div className="team-logo-container">
                        <img className="team-logo" src={Macfelogo} alt="Mac FE logo"/>
                    </div>
                    <div className="draw-line"></div>
                    <h1 className="team-name">MAC Formula Electric</h1>
                    <div className="draw-line"></div>
                    <div className="typewriter-container">
                        <h3 className="solid-text">Inspiring a culture of innovation</h3>
                        {/* <h3>           
                            <a href="" className="typewrite" data-period="2000" data-type='[ "Technology", "Teamwork", "Innovation"]'>
                                <span className="wrap"></span>
                            </a>
                        </h3> */}
                        </div>
                </div>
            </div>
        )
    }
}

export default MainShowcase;
