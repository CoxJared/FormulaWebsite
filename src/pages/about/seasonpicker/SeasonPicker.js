import React, { Component } from 'react';
import './SeasonPicker.css';

import imageTocheck from './../../../img/nite-life.jpg'

export class SeasonPicker extends Component {
    constructor(props){
        super(props)
    }

    isSelected = (choice, currentSection) => {
        if (choice === currentSection)
        {
            return "selected-season"
        }
        return "unselected-season"
    } 

    render() {
        return (
            <div className="season-picker-container section-2019-overview">
                <img src={imageTocheck} style={{height:'0', width:'0', opacity:'0'}} onLoad={this.props.imageLoaded} />
                <div className="season-picker">

                <div 
                    className={`season-container ${this.isSelected("2018", this.props.season)}`}
                    onClick={this.props.updateSeason.bind(this, "2018")}
                    >
                        <div className="year-container">
                            <h1 className="year-header"
                            >2018</h1>
                        </div>
                        {/* <div className="timeline-container">
                            <div className="timeline-line-left">
                                <div className="time-dot"></div>
                            </div>        
                        </div> */}
                    </div>
                    <div 
                    className={`season-container ${this.isSelected("2019", this.props.season)}`}
                    onClick={this.props.updateSeason.bind(this, "2019")}
                    >
                        <div className="year-container">
                            <h1 
                            className="year-header"
                            >2019</h1>
                        </div>
                        {/* <div className="timeline-container">
                            <div className="timeline-line">
                                <div className="time-dot"></div>
                            </div>        
                        </div> */}
                    </div>
                    <div 
                    className={`season-container ${this.isSelected("2020", this.props.season)}`}
                    onClick={this.props.updateSeason.bind(this, "2020")}
                    >
                        <div className="year-container">
                            <h1 className="year-header"
                            >2020</h1>
                        </div>
                        {/* <div className="timeline-container">
                            <div className="timeline-line-right">
                                <div className="time-dot"></div>
                            </div>        
                        </div> */}
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default SeasonPicker;
