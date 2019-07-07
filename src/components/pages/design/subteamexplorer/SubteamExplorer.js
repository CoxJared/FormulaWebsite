import React, { Component } from 'react';
import './SubteamExplorer.css';

export class SubteamExplorer extends Component { 
    update(name) {
        this.props.updateState(name)
    }

    render() {
        return (
            <div className="subteam-container">
                <ul className='subteam-list'>
                    <li className="subteam-option" onClick={this.update.bind(this, "general")}>
                        General
                    </li>
                    <li className="subteam-option" onClick={this.update.bind(this, "aero")}>
                        Aerodynamics
                    </li>
                    <li className="subteam-option" onClick={this.update.bind(this, "chassis")}>
                        Chassis
                    </li>
                    <li className="subteam-option" onClick={this.update.bind(this, "lowvoltage")}>
                        Low Voltage
                    </li>
                    <li className="subteam-option" onClick={this.update.bind(this, "tractive")}>
                        Tractive System
                    </li>
                    <li className="subteam-option" onClick={this.update.bind(this, "suspension")}>
                        Suspension
                    </li>
                    <li className="subteam-option" onClick={this.update.bind(this, "controls")}>
                        Controls
                    </li>
                </ul>
            </div>
        )
    }
}

export default SubteamExplorer
