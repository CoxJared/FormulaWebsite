import React, { Component } from 'react';
import './SectionPicker.css';

export class SectionPicker extends Component {

    isSelected = (choice, currentSection) => {
        if (choice === currentSection)
        {
            return "selected-section"
        }
        return "unselected-section"
    } 

    isDesignShowing = (season) => {
        if(season === "2018" | season ==="2020")
        {return "hide-design"}
        return "choice"
    }
    isOverviewShowing = (season) => {
        if(season === "2018")
        {return "hide-design"}
        return "choice"
    }

    
    render() {
            if(this.props.section === "design"){
                this.props.updateSection.bind(this, "overview")
            }

        return (
            <div className="section-picker-container">
                <div className="section-picker">
                    <div className={`${this.isDesignShowing(this.props.season)}`}>
                        <h1 
                        className={`choice-name ${this.isSelected("design", this.props.section)}`}
                        onClick={this.props.updateSection.bind(this, "design")}
                        >Design
                        </h1>
                    </div>
                    <div className={`${this.isOverviewShowing(this.props.season)}`}>
                        <h1 
                        className={`choice-name ${this.isSelected("overview", this.props.section)}`}
                        onClick={this.props.updateSection.bind(this, "overview")}
                        >Overview
                        </h1>
                    </div>
                    <div className="choice">
                        <h1 
                        className={`choice-name ${this.isSelected("team", this.props.section)}`}
                        onClick={this.props.updateSection.bind(this, "team")}
                        >Team
                        </h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default SectionPicker
