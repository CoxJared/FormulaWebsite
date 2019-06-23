import React, { Component } from 'react';
import Header from './../layout/Header';

import carRender from './../../video/animation__converted_.mp4';

export class Design extends Component {
    render() {
        return (
            <div>
                <Header />

                <video id="background-video" loop autoPlay>
                    <source src={carRender} type="video/mp4" />
                    
                    Your browser does not support the video tag.
                </video>


            </div>
        )
    }
}

export default Design
