import React, { Component } from 'react'
import './PositionSelector.css';

export class PositionSelector extends Component {
       
isSelected = (choice, currentSection) => {
    if (choice === currentSection)
    {
        return "selected-section"
    }
    return "unselected-section"
} 


render() {

    return (
        <div className="positions-picker-container">
            <div className="position-picker">
                <div className="position">
                    <h1 
                        className={`position-name ${this.isSelected("all", this.props.positions)}`}
                        onClick={this.props.updatePosition.bind(this, "all")}>
                            All
                    </h1>
                </div>
                <div className="position">
                    <h1 
                        className={`position-name ${this.isSelected("mechanical", this.props.positions)}`}
                        onClick={this.props.updatePosition.bind(this, "mechanical")}>
                            Mechanical
                    </h1>
                </div>
                <div className="position">
                    <h1 
                        className={`position-name ${this.isSelected("electrical", this.props.positions)}`}
                        onClick={this.props.updatePosition.bind(this, "electrical")}>
                            Electrical
                    </h1>
                </div>
                <div className="position">
                    <h1 
                        className={`position-name ${this.isSelected("software", this.props.positions)}`}
                        onClick={this.props.updatePosition.bind(this, "software")}>
                            Software
                    </h1>
                </div>
                <div className="position">
                    <h1 
                        className={`position-name ${this.isSelected("business", this.props.positions)}`}
                        onClick={this.props.updatePosition.bind(this, "business")}>
                            Business
                    </h1>
                </div>
            </div>
        </div>
    )
    }
}

export default PositionSelector
