import React, { Component } from 'react';
import './overview2019/Overview2019.css';

export class OverviewPopup extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            image: this.props.images[0]
        }
    }

    updatePhoto = (image) => {
        this.setState({image:image})
    }


    render() {
        return (
            <div>
  
            <div className="overview-popup-full" onClick={this.props.destroyPopup}>
                
            </div>
            <div className="overview-popup-container">
                <div className="overview-popup-left-container">
                    <img className="overview-popup-left-container-image" src={this.state.image} alt=""/>

                    <div className="overview-popup-left-images-container">

                    {this.props.images.map(image => (


                        <div className="overview-popup-left-image-container" onClick={this.updatePhoto.bind(this,image)}>
                            <img src={image} className="overview-popup-left-image" alt="" />
                        </div>

                    ))}

                    </div>
                </div>


                <div className="overview-popup-right-container">
                
                    <h1 className="overview-popup-right-container-header">{this.props.name}</h1>
                    <p className="overview-popup-right-container-paragraph">{this.props.paragraph}</p>
                </div>
                <button className="member-popup-close-button" onClick={this.props.destroyPopup}>
                            <div className="member-popup-close-button-line1">
                                </div>
                                <div className="member-popup-close-button-line2">
                                </div>
                                </button>
                </div>

            </div>

        )
    }
}

export default OverviewPopup
