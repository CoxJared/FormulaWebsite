import React, { Component } from 'react';
import './InfoSelector.css';

export class InfoSelector extends Component {

    isPageSelected(selectedInfo, thisInfo) 
    {
        if(selectedInfo === thisInfo)
        {
            return "info-subteam"
        }
        return "";
    }
    render() {
        return (
            <div className=
            {`info-container ${this.props.info}`}>
                <ul className='info-list'>
                <li 
                    className={`info-option ${this.isPageSelected(this.props.info, "why-join")}`}
                    onClick={this.props.updateInfo.bind(this, "why-join")}>
                        Opening
                    </li>
                    {/* <li 
                    className={`info-option ${this.isPageSelected(this.props.info, "process")}`}
                    onClick={this.props.updateInfo.bind(this, "process")
                    }>
                        Process
                    </li> */}
                    <li 
                    className={`info-option ${this.isPageSelected(this.props.info, "events")}`}
                    onClick={this.props.updateInfo.bind(this, "events")}>
                        Events
                    </li>
                    
                </ul>
            </div>
        )
    }
}

export default InfoSelector
