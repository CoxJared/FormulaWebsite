import React, { Component } from 'react';
import showcaseImage from './../../img/HomeCourt.jpg';

class MainShowcase extends Component {
    render() {
        return (
            <div className="showcase">
                <img 
                className="showcase-image" 
                src={showcaseImage} 
                alt=""></img>
                



            </div>
        )
    }
}

export default MainShowcase;
