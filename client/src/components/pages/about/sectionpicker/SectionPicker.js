import React, { Component } from '../../../../../node_modules/react';
import './SectionPicker.css';

export class SectionPicker extends Component {

    isSelected = (choice, currentSection) => {
        console.log(choice, currentSection)
        if (choice === currentSection)
        {
            console.log("yep")
            return "selected-section"
        }
        return "unselected-section"
    } 

    render() {
        return (
            <div className="section-picker-container">
                <div className="section-picker">
                    <div className="choice">
                        <h1 
                        className={`choice-name ${this.isSelected("design", this.props.section)}`}
                        onClick={this.props.updateSection.bind(this, "design")}
                        >Design
                        </h1>
                    </div>
                    <div className="choice">
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
