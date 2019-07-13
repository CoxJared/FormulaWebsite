import React, { Component } from 'react';
import './DesignExplorer.scss';

import generalRender from './../../../../img/design-showcase/general.png';
import aeroRender from './../../../../img/design-showcase/aerodynamics.png';
import chassisRender from './../../../../img/design-showcase/chassis.png';
import suspRender from './../../../../img/design-showcase/suspension.png';
import tractiveRender from './../../../../img/design-showcase/tractive.png';
import controlsRender from './../../../../img/design-showcase/controls.png';
import lowvoltageRender from './../../../../img/design-showcase/lowvoltage.png';

import generalTab1 from './../../../../img/design-showcase/general/top.png';
import generalTab2 from './../../../../img/design-showcase/general/movie.gif';
import generalTab3 from './../../../../img/design-showcase/general/sie.png';

import aeroTab1 from './../../../../img/design-showcase/aerodynamics/aeroflow.png';
import aeroTab2 from './../../../../img/design-showcase/aerodynamics/rear-wing.png';
import aeroTab3 from './../../../../img/design-showcase/aerodynamics/layup-undertray.jpg';

import chassisTab1 from './../../../../img/design-showcase/chassis/chassis-analysis.png';
import chassisTab2 from './../../../../img/design-showcase/chassis/faro3.png';
import chassisTab3 from './../../../../img/design-showcase/chassis/wrapping.jpg';

import lvTab1 from './../../../../img/design-showcase/lowvoltage/render.png';
import lvTab2 from './../../../../img/design-showcase/lowvoltage/unpacking.jpg';
import lvTab3 from './../../../../img/design-showcase/lowvoltage/enclosure-photo.jpg';

import hvTab1 from './../../../../img/design-showcase/tractivesystem/invertor.jpg';
import hvTab2 from './../../../../img/design-showcase/tractivesystem/motor-exploded.png';
import hvTab3 from './../../../../img/design-showcase/tractivesystem/fans.jpg';

import suspTab1 from './../../../../img/design-showcase/suspension/sus 2.png';
import suspTab2 from './../../../../img/design-showcase/suspension/suspension-testing-wiki.png';
import suspTab3 from './../../../../img/design-showcase/suspension/front-view.jpg';

import controlTab1 from './../../../../img/design-showcase/controls/can-bus-wiki.png';
import controlTab2 from './../../../../img/design-showcase/controls/dash-zoom.jpg';
import controlTab3 from './../../../../img/design-showcase/controls/controls-wheel.png';


 class DesignExplorer extends Component {
     state = {
         general: {
             render: generalRender,
             tab1: generalTab1,
             tab1Name: "Top View",
             tab2: generalTab2,
             tab2Name: "Animated Render",
             tab3: generalTab3,
             tab3Name: "Side View",
         },
         aero: {
            render: aeroRender,
            tab1: aeroTab1,
            tab1Name: "Airflow",
            tab2: aeroTab2,
            tab2Name: "Pressure Profile",
            tab3: aeroTab3,
            tab3Name: "Composite Layup"
        },
         chassis: {
            render: chassisRender,
            tab1: chassisTab1,
            tab1Name: "Structural Analysis",
            tab2: chassisTab2,
            tab2Name: "Faro Arm",
            tab3: chassisTab3,
            tab3Name: "In-house Vinyl Wrap"
        },
         suspension: {
            render: suspRender,
            tab1: suspTab1,
            tab1Name: "Simulation",
            tab2: suspTab2,
            tab2Name: "Testing",
            tab3: suspTab3,
            tab3Name: "Mounted"
        },
         tractive: {
            render: tractiveRender,
            tab1: hvTab1,
            tab1Name: "Invertors",
            tab2: hvTab2,
            tab2Name: "Motor Diagram",
            tab3: hvTab3,
            tab3Name: "Air Cooling"
        },
         lowvoltage: {
            render: lowvoltageRender,
            tab1: lvTab1,
            tab1Name: "BCM Schematic",
            tab2: lvTab2,
            tab2Name: "BCM Enclosure",
            tab3: lvTab3,
            tab3Name: "BCM Complete"
        },
         controls: {
            render: controlsRender,
            tab1: controlTab1,
            tab1Name: "Diagram",
            tab2: controlTab2,
            tab2Name: "Custom Dashboard",
            tab3: controlTab3,
            tab3Name: "Installed"
        }     
     }



    render() {
        if(!this.props.entered)
        {
            return (
                <div className="design-explorer"> 
                
                    <div classname="welcome-flex-column">           
                        <div className="image-container-welcome">         
                            <img src={this.state[this.props.type].render} className="image-show" />
                        </div>
                        <div className="welcome-button-container">
                            <button className="welcome-button" onClick={this.props.enter}>Explore</button>
                        </div>
                    </div>
                    <div className="background-slider"> </div>
                </div>
            )
        }
        if(this.props.type === "general")
        {
            return (
                <div className="design-explorer"> 
                    <div className="image-container">     
                        <img src={this.state[this.props.type].render} className="image-show" />
                        <div className="tabs">
                            <div className="tab">
                                <img src={this.state[this.props.type].tab1} className="image-tab" />
                                <div className="tab-text">
                                <h1 className="tab-heading">{this.state[this.props.type].tab1Name}</h1>
                                </div>
                            </div>
                            <div className="tab">
                                <div className="gif-tab"></div>                  
                            </div>
                            <div className="tab">
                                <img src={this.state[this.props.type].tab3} className="image-tab" />  
                                <div className="tab-text">
                                <h1 className="tab-heading">{this.state[this.props.type].tab3Name}</h1>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="design-explorer"> 
                <div className="image-container">     
                    <img src={this.state[this.props.type].render} className="image-show" />
                    <div className="tabs">
                        <div className="tab">
                            <img src={this.state[this.props.type].tab1} className="image-tab" />
                            <div className="tab-text">
                                <h1 className="tab-heading">{this.state[this.props.type].tab1Name}</h1>
                            </div>
                        </div>
                        <div className="tab">
                            <img src={this.state[this.props.type].tab2} className="image-tab" /> 
                            <div className="tab-text">
                                <h1 className="tab-heading">{this.state[this.props.type].tab2Name}</h1>
                            </div> 
                        </div>
                        <div className="tab">
                            <img src={this.state[this.props.type].tab3} className="image-tab" />  
                            <div className="tab-text">
                                <h1 className="tab-heading">{this.state[this.props.type].tab3Name}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DesignExplorer
