import React, { Component } from 'react';
import Header from './../layout/header/Header';
import DesignExplorer from '../layout/designexplorer/DesignExplorer';
import General from '../layout/textblocks/designtext/general/General';
import SubteamExplorer from '../layout/subteamexplorer/SubteamExplorer';


export class Design extends Component {
    state = {
        textBlock : <General />
    }

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {
        return (
            <div>
                <Header />
                <DesignExplorer />
                <SubteamExplorer />
                {this.state.textBlock}
            </div>
        )
    }
}

export default Design
