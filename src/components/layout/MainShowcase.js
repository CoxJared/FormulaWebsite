import React, { Component } from 'react';
import showcaseImage from './../../img/HomeCourt.jpg';
import showcaseMain from './../../img/mcmaster-logo.png';

class MainShowcase extends Component {
    render() {
        return (
            <div className="showcase">

             <img 
                className="showcase-main" 
                src={showcaseMain} 
                alt=""></img>  
                <img 
                className="showcase-image" 
                src={showcaseImage} 
                alt=""></img>   

                
            </div>
        )
    }
}

export default MainShowcase;
