import React, { Component } from 'react';

import carRender from './../../../video/animation__converted_.mp4';

 class DesignExplorer extends Component {
    render() {
        return (
            <div className="design-explorer">      
                <video className="car-render-video" loop autoPlay>
                    <source src={carRender} type="video/mp4" />
                </video>
            </div>
        )
    }
}

export default DesignExplorer
