import React, { Component } from 'react';
import './DesignExplorer.css';

import generalRender from './../../../img/design-showcase/general.png';
import aeroRender from './../../../img/design-showcase/aerodynamics.png';
import chassisRender from './../../../img/design-showcase/chassis.png';
import suspRender from './../../../img/design-showcase/susp.png';

 class DesignExplorer extends Component {
     state = {
         general: generalRender,
         aero: aeroRender,
         chassis: chassisRender,
         suspension: suspRender
     }
    render() {
        return (
            <div className="design-explorer">      
                <img src={this.state[this.props.type]} className="image-show" />
            </div>
        )
    }
}

export default DesignExplorer
