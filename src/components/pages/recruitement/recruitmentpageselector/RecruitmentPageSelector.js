import React, { Component } from 'react';
import './RecruitmentPageSelector.css';

export class SectionSelector extends Component {

    isSelected = (choice, currentSection) => {
        console.log(choice, currentSection)
        if (choice === currentSection)
        {
            console.log("yep")
            return "recruitment-selected-section"
        }
        return "recruitment-unselected-section"
    } 


    render() {
        return (
                <div className=
                {`recruitment-section-selector-container ${this.props.page}`}>
                <div className="recruitment-section-selector">
                    <div className="recruitment-choice">
                        <h1 
                        className={`recruitment-choice-name ${this.isSelected("about", this.props.page)}`}
                        onClick={this.props.updatePage.bind(this, "about")}
                        >Information
                        </h1>
                    </div>
                    <div className="recruitment-choice">
                        <h1 
                        className={`recruitment-choice-name ${this.isSelected("positions", this.props.page)}`}
                        onClick={this.props.updatePage.bind(this, "positions")}
                        >Openings
                        </h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default SectionSelector
