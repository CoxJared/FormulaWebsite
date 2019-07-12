import React, { Component } from 'react';
import generalRender from './../../../../img/design-showcase/general.png';

export class designwelcom extends Component {
    render() {
        return (
            <div>
                <div className="image-container">     
                        <img src={generalRender} className="image-show" />
                </div>
            </div>
        )
    }
}

export default designwelcom
