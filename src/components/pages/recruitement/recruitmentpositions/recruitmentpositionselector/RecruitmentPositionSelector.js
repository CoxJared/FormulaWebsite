import React, { Component } from 'react';
import './RecruitmentPositionSelector.css';

export class RecruitmentPositionSelector extends Component {

    isSubteamSelected(selectedSubteam, thisSubteam) 
    {
        console.log("hello, ",selectedSubteam, thisSubteam);
        if(selectedSubteam === thisSubteam)
        {
            return "selected-selector-position"
        }
        return "";
    }
    render() {
        return (
            <div className=
            {`position-selector-container ${this.props.positionsListed}`}>
                <ul className='position-list'>
                    <li 
                    className={`position-selector-option ${this.isSubteamSelected(this.props.positionsListed, "all")}`}
                    onClick={this.props.updatePositionsVisible.bind(this, "all")
                    }>
                        All Positions
                    </li>
                    <li 
                    className={`position-selector-option ${this.isSubteamSelected(this.props.positionsListed, "mechanical")}`}
                     onClick={this.props.updatePositionsVisible.bind(this, "mechanical")}>
                        Mechanical
                    </li>
                    <li 
                    className={`position-selector-option ${this.isSubteamSelected(this.props.positionsListed, "electrical")}`}
                     onClick={this.props.updatePositionsVisible.bind(this, "electrical")}>
                        Electrical
                    </li>
                    <li 
                    className={`position-selector-option ${this.isSubteamSelected(this.props.positionsListed, "software")}`}
                     onClick={this.props.updatePositionsVisible.bind(this, "software")}>
                        Software
                    </li>
                    <li 
                    className={`position-selector-option ${this.isSubteamSelected(this.props.positionsListed, "business")}`}
                    onClick={this.props.updatePositionsVisible.bind(this, "business")}>
                        Business
                    </li>          
                </ul>
            </div>
        )
    }
}

export default RecruitmentPositionSelector
