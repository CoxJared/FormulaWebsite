import React, { Component } from 'react';
import Header from './../layout/Header';
import DesignExplorer from './../layout/DesignExplorer';


export class Design extends Component {
    render() {
        return (
            <div>
                <Header />
                <DesignExplorer />
            </div>
        )
    }
}

export default Design
