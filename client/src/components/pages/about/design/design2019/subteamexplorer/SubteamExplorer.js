import React, { Component } from '../../../../../../../node_modules/react';
import './SubteamExplorer.css';

export class SubteamExplorer extends Component { 
    update(name) {
        this.props.updateState(name)
    }

    isSubteamSelected(selectedSubteam, thisSubteam) 
    {
        console.log("hello, ",selectedSubteam, thisSubteam);
        if(selectedSubteam == thisSubteam)
        {
            console.log("yo");
            return "selected-subteam"
        }
        return "";
    }

    render() {
        return (
            <div className="subteam-container">
                <ul className='subteam-list'>
                    <li 
                    className={`subteam-option ${this.isSubteamSelected(this.props.subteam, "general")}`}
                    onClick={this.update.bind(this, "general")
                    }>
                        General
                    </li>
                    <li 
                    className={`subteam-option ${this.isSubteamSelected(this.props.subteam, "tractive")}`}
                     onClick={this.update.bind(this, "tractive")}>
                        Tractive System
                    </li>
                    <li 
                    className={`subteam-option ${this.isSubteamSelected(this.props.subteam, "chassis")}`}
                     onClick={this.update.bind(this, "chassis")}>
                        Chassis
                    </li>
                    <li 
                    className={`subteam-option ${this.isSubteamSelected(this.props.subteam, "aero")}`}
                     onClick={this.update.bind(this, "aero")}>
                        Aerodynamics
                    </li>
                    <li 
                    className={`subteam-option ${this.isSubteamSelected(this.props.subteam, "lowvoltage")}`}
                    onClick={this.update.bind(this, "lowvoltage")}>
                        Low Voltage
                    </li>          
                    <li 
                    className={`subteam-option ${this.isSubteamSelected(this.props.subteam, "suspension")}`}
                    onClick={this.update.bind(this, "suspension")}>
                        Vehicle Dynamics
                    </li>
                    <li 
                    className={`subteam-option ${this.isSubteamSelected(this.props.subteam, "controls")}`}
                    onClick={this.update.bind(this, "controls")}>
                        Controls
                    </li>
                </ul>
            </div>
        )
    }
}

export default SubteamExplorer
