import React, { Component } from 'react';
import './DesignExplorer.css';

import generalRender from './../../../../img/design-showcase/general.png';
import aeroRender from './../../../../img/design-showcase/aerodynamics.png';
import chassisRender from './../../../../img/design-showcase/chassis.png';
import suspRender from './../../../../img/design-showcase/susp.png';
import tractiveRender from './../../../../img/design-showcase/tractive.png';

 class DesignExplorer extends Component {
     state = {
         general: generalRender,
         aero: aeroRender,
         chassis: chassisRender,
         suspension: suspRender,
         tractive: tractiveRender
     }
    render() {
        return (
            <div className="design-explorer"> 
                <div className="image-container">     
                    <img src={this.state[this.props.type]} className="image-show" />
                </div>
            </div>
        )
    }
}

export default DesignExplorer
