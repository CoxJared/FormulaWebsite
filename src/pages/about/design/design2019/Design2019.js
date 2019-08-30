import React, { Component } from 'react';

import DesignExplorer from './designexplorer/DesignExplorer';
import General from './designtext/General';
import SubteamExplorer from './subteamexplorer/SubteamExplorer';
import Aerodynamics from './designtext/Aerodynamics';
import Chassis from './designtext/Chassis';
import Suspension from './designtext/Supersension';
import LowVoltage from './designtext/LowVoltage';
import TractiveSystem from './designtext/TractiveSystem';
import Controls from './designtext/Controls';


export class Design2019 extends Component {
    constructor() {
        super()
        this.state = {
            subteam: "general",
            textblock: {
                general: <General />,
                aero: <Aerodynamics />,
                suspension: <Suspension />,
                chassis: <Chassis />,
                lowvoltage: <LowVoltage />,
                tractive: <TractiveSystem />,
                controls: <Controls />
            }
        }
    }

    updateState = (newSubteam) => {
        this.setState({subteam : newSubteam})
    }

    render() {
        return (
            <div>
                <SubteamExplorer updateState = {this.updateState} subteam={this.state.subteam}/>
                <DesignExplorer entered={this.state.entered} type={this.state.subteam}/>
                {this.state.textblock[this.state.subteam]}
            </div>
        )
    }
}

export default Design2019;
