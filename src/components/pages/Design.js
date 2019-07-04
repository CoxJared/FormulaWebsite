import React, { Component } from 'react';
import Header from './../layout/header/Header';
import DesignExplorer from '../layout/designexplorer/DesignExplorer';
import Inovate from '../layout/textblocks/Inovate';
import SubteamExplorer from '../layout/subteamexplorer/SubteamExplorer';


export class Design extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {
        return (
            <div>
                <Header />
                <DesignExplorer />
                <SubteamExplorer />
                <Inovate />
            </div>
        )
    }
}

export default Design
