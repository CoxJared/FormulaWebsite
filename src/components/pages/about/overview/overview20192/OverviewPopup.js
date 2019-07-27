import React, { Component } from 'react';
import './Overview.css';

export class OverviewPopup extends Component {



    render() {
        return (
            <div>
  
            <div className="overview-popup-full" onClick={this.props.destroyPopup}>
                
            </div>
            <div className="overview-popup-container">
                <div className="overview-popup-left-container">
                    <img className="overview-popup-left-container-image" src={this.props.images[0]}/>
                </div>
                <div className="overview-popup-right-container">
                
                    <h1 className="overview-popup-right-container-header">{this.props.name}</h1>
                    <p className="overview-popup-right-container-paragraph">{this.props.paragraph}</p>
                </div>
                </div>
            </div>

        )
    }
}

export default OverviewPopup
