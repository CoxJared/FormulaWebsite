import React, { Component } from 'react';
import './MainShowcase.scss';
import { Link } from 'react-router-dom';

import background from './../../../img/home-1.jpg'

    
class MainShowcase extends Component {
    render() {
        return (
            
            <div className="showcase-container">
                <div className="showcase">
                    <img className='main-showcase-image' src={background} onLoad={this.props.showcaseLoaded}/>
                    
                    <h1 className="team-name">INSPIRING A CULTURE OF INNOVATION</h1>
                    <div className="culture-container">
                        <h3 className="culture-text">A multidisciplinary project that brings together the most passionate students to work towards a common goal.</h3>
                    </div>
                </div>
            </div>
         
        )
    }
}

export default MainShowcase;
