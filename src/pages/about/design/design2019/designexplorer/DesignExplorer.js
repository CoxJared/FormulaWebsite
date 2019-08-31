import React, { Component } from 'react';
import './DesignExplorer.scss';

import generalRender from './../../../../../img/design-showcase/general.png';
import aeroRender from './../../../../../img/design-showcase/aerodynamics.png';
import chassisRender from './../../../../../img/design-showcase/chassis.png';
import suspRender from './../../../../../img/design-showcase/suspension.png';
import tractiveRender from './../../../../../img/design-showcase/tractive.png';
import controlsRender from './../../../../../img/design-showcase/controls.png';
import lowvoltageRender from './../../../../../img/design-showcase/lowvoltage.png';



 class DesignExplorer extends Component {
     state = {
         general: {
             render: generalRender
         },
         aero: {
            render: aeroRender
        },
         chassis: {
            render: chassisRender
        },
         suspension: {
            render: suspRender
        },
         tractive: {
            render: tractiveRender
        },
         lowvoltage: {
            render: lowvoltageRender
        },
         controls: {
            render: controlsRender
        }     
     }

    render() {
        return (
            <div className="design-explorer-container"> 
                <div className="image-container">     
                    <img src={this.state[this.props.type].render} className="image-show" alt="subteam-render"/>
                </div>
            </div>
        )
    }
}

export default DesignExplorer
