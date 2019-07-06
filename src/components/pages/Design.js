import React, { Component } from 'react';
import Header from './../layout/header/Header';
import DesignExplorer from '../layout/designexplorer/DesignExplorer';
import General from '../layout/textblocks/designtext/general/General';
import SubteamExplorer from '../layout/subteamexplorer/SubteamExplorer';
import Aerodynamics from '../layout/textblocks/designtext/aerodynamics/Aerodynamics';
import Chassis from '../layout/textblocks/designtext/chassis/Chassis';
import Supersension from '../layout/textblocks/designtext/suspension/Supersension';


export class Design extends Component {

    state = {
        subteam: "suspension",
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
                <Aerodynamics />
            </div>
        )
    }
    
}

export default Design;
