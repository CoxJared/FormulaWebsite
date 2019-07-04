import React, { Component } from 'react';
import Header from './../layout/header/Header';
import DesignExplorer from '../layout/designexplorer/DesignExplorer';
import Inovate from '../layout/textblocks/Inovate';
import SubteamExplorer from '../layout/subteamexplorer/SubteamExplorer';


export class Design extends Component {
    state = {
        textBlock : <Inovate />
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
