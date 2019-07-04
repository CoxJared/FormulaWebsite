import React, { Component } from 'react';
import './SubteamExplorer.css';

export class SubteamExplorer extends Component {
    render() {
        return (
            <div className="subteam-container">
                <ul className='subteam-list'>
                    <li className="subteam-option">
                        General
                    </li>
                    <li className="subteam-option">
                        Aerodynamics
                    </li>
                    <li className="subteam-option">
                        Chassis
                    </li>
                    <li className="subteam-option">
                        Tractive System
                    </li>
                    <li className="subteam-option">
                        Low Voltage
                    </li>
                    <li className="subteam-option">
                        Suspension
                    </li>
                    <li className="subteam-option">
                        Controls
                    </li>
                </ul>
            </div>
        )
    }
}

export default SubteamExplorer
