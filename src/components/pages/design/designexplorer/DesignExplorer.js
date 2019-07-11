import React, { Component } from 'react';
import './DesignExplorer.css';

import generalRender from './../../../../img/design-showcase/general.png';
import aeroRender from './../../../../img/design-showcase/aerodynamics.png';
import chassisRender from './../../../../img/design-showcase/chassis.png';
import suspRender from './../../../../img/design-showcase/suspension.png';
import tractiveRender from './../../../../img/design-showcase/tractive.png';
import controlsRender from './../../../../img/design-showcase/controls.png';
import lowvoltageRender from './../../../../img/design-showcase/lowvoltage.png';

import tab1 from './../../../../img/design-showcase/general/moviebestres.gif'

 class DesignExplorer extends Component {
     state = {
         main: {
         general: generalRender,
         aero: aeroRender,
         chassis: chassisRender,
         suspension: suspRender,
         tractive: tractiveRender,
         lowvoltage: lowvoltageRender,
         controls: controlsRender
         },
         tab1: {
            general: tab1
         }
     }



    render() {
        return (
            <div className="design-explorer"> 
                <div className="image-container">     
                    <img src={this.state.main[this.props.type]} className="image-show" />
                    <div className="tab-1">
                    {/* <img src={this.state.tab1[this.props.type]} className="image-tab-1" /> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default DesignExplorer
