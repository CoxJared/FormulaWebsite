import React, { Component } from 'react';
import Header from './../layout/Header';
import DesignExplorer from './../layout/DesignExplorer';


export class Design extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }

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
