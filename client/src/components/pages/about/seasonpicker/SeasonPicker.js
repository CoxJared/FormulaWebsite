import React, { Component } from '../../../../../node_modules/react';
import './SeasonPicker.css';

export class SeasonPicker extends Component {

    isSelected = (choice, currentSection) => {
        console.log(choice, currentSection)
        if (choice === currentSection)
        {
            console.log("yep")
            return "selected-season"
        }
        return "unselected-season"
    } 

    render() {
        return (
            <div className="season-picker-container">
                <div className="season-picker">
   
                    <div 
                    className={`season-container ${this.isSelected("2019", this.props.season)}`}
                    onClick={this.props.updateSeason.bind(this, "2019")}
                    >
                        <div className="year-container">
                            <h1 
                            className="year-header"
                            >2019</h1>
                        </div>
                        <div className="timeline-container">
                            <div className="timeline-line">
                                <div className="time-dot"></div>
                            </div>        
                        </div>
                    </div>
                    <div 
                    className={`season-container ${this.isSelected("2020", this.props.season)}`}
                    onClick={this.props.updateSeason.bind(this, "2020")}
                    >
                        <div className="year-container">
                            <h1 className="year-header"
                            >2020</h1>
                        </div>
                        <div className="timeline-container">
                            <div className="timeline-line">
                                <div className="time-dot"></div>
                            </div>        
                        </div>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default SeasonPicker;