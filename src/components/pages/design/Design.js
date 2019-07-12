import React, { Component } from 'react';
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';

import DesignExplorer from './designexplorer/DesignExplorer';
import General from './designtext/general/General';
import SubteamExplorer from './subteamexplorer/SubteamExplorer';
import Aerodynamics from './designtext/aerodynamics/Aerodynamics';
import Chassis from './designtext/chassis/Chassis';
import Suspension from './designtext/suspension/Supersension';
import LowVoltage from './designtext/lowvoltage/LowVoltage';
import TractiveSystem from './designtext/tractivesystem/TractiveSystem';
import Controls from './designtext/controls/Controls';


export class Design extends Component {

    state = {
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
    

    updateState = (newSubteam) => {
        this.setState({subteam : newSubteam})
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <Header />
                <DesignExplorer type={this.state.subteam} />
                <SubteamExplorer updateState = {this.updateState}/>
                {this.state.textblock[this.state.subteam]}
                <Footer />
            </div>
        )
    }
    
}

export default Design;
