import React, { Component } from 'react';

import carRender from './../../video/animation__converted_.mp4';

 class DesignExplorer extends Component {
    render() {
        return (
            <div>
            <div className="design-explorer">      
                <video className="car-render-video" loop autoPlay>
                    <source src={carRender} type="video/mp4" />
                </video>
            </div>

            <div className="design-summary">
                <h1>
                    Innovate
                </h1>
                    <p>
                    MAC Formula Electric prides itself for being on the cutting edge of motorsport technology by implementing techniques and design features which are rarely seen in anything other than premier racing series. The use of CNC machinery and CAD modelling as well as various FEA software has allowed us to detail, design and analyze every portion of our car to the smallest detail. Taking full advantage of all the opportunities presented to the team we were able to design not only our best performing, but also by far our most efficient car to date.
                    </p>
                </div>
            </div>
        )
    }
}

export default DesignExplorer
