import React, { Component } from 'react';
import DesignExplorer from './designexplorer/DesignExplorer';


export class Design2020 extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
            return (
                <div>
                    <DesignExplorer />
                </div>
            )
        
    }
    
}

export default Design2020;
