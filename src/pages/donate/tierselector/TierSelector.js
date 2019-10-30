import React, { Component } from 'react';
import './TierSelector.css';

export class TierSelection extends Component {

    isSelected = (choice, currentSection) => {
        if (choice === currentSection)
        {
            return "selected-section"
        }
        return "unselected-section"
    } 
    
    render() {
            if(this.props.section === "design"){
                this.props.updateSection.bind(this, "overview")
            }

        return (
            <div className="tier-picker-container">
                <div className="tier-picker">
                    <div className="tier">
                        <h1 
                        className={`tier-name ${this.isSelected("Title", this.props.section)}`}
                        onClick={this.props.updateSection.bind(this, "Title")}
                        >Title
                        </h1>
                    </div>
                    <div className="tier">
                        <h1 
                        className={`tier-name ${this.isSelected("Platinum", this.props.section)}`}
                        onClick={this.props.updateSection.bind(this, "Platinum")}
                        >Platinum
                        </h1>
                    </div>
                    <div className="tier">
                        <h1 
                        className={`tier-name ${this.isSelected("Gold", this.props.section)}`}
                        onClick={this.props.updateSection.bind(this, "Gold")}
                        >Gold
                        </h1>
                    </div>
                    <div className="tier">
                        <h1 
                        className={`tier-name ${this.isSelected("Silver", this.props.section)}`}
                        onClick={this.props.updateSection.bind(this, "Silver")}
                        >Silver
                        </h1>
                    </div>
                    <div className="tier">
                        <h1 
                        className={`tier-name ${this.isSelected("Bronze", this.props.section)}`}
                        onClick={this.props.updateSection.bind(this, "Bronze")}
                        >Bronze
                        </h1>
                    </div>
                    <div className="tier">
                        <h1 
                        className={`tier-name ${this.isSelected("Contributor", this.props.section)}`}
                        onClick={this.props.updateSection.bind(this, "Contributor")}
                        >Contributor
                        </h1>
                    </div>
                </div>
                {this.props.section !==""?
                <div className="overview-button-container">
                    <h1 className="overview-button"
                    onClick={this.props.updateSection.bind(this, "")}
                    >Overview</h1>
                </div>
                :<div/>
                }
            </div>
        )
    }
}

export default TierSelection
