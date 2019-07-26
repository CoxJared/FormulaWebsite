import React, { Component } from 'react';
import './MainShowcase.scss';

import Macfelogo from '../../../../img/logo-transparent.png';


class MainShowcase extends Component {

    render() {
        return (
            <div className="showcase-container">
                <div className="showcase">
                    <div className="team-logo-container">
                        <img className="team-logo" src={Macfelogo} alt="Mac FE logo"/>
                    </div>
                    <div className="draw-line"></div>
                    <h1 className="team-name">MAC Formula Electric</h1>
                    <div className="draw-line"></div>
                    <div className="culture-container">
                        <h3 className="culture-text">Inspiring a culture of innovation</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainShowcase;
