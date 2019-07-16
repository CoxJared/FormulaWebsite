import React, { Component } from 'react';
import InstagramEmbed from 'react-instagram-embed';
import './Media.scss';

export class Media extends Component {
    render() {
        return (
            <div className="media-container">
                <div className="media-title-container">
                    <h1 className="media-title">Media</h1>
                </div>

                <div className="media-events">
                    <div className="media-event">
                        <div className="media-event-image-3">

                        </div>
                        <div className="media-event-date">
                            <h1 className="media-event-date-header">April 10, 2019</h1>
                        </div>
                        <div className="media-event-description-container">
                            <p className="media-event-description">
                                University students can now earn badges to recognize their merits
                            </p>
                        </div>
                    </div>

                    <div className="media-event">
                        <div className="media-event-image-2">

                        </div>
                        <div className="media-event-date">
                            <h1 className="media-event-date-header">March 4, 2019</h1>
                        </div>
                        <div className="media-event-description-container">
                            <p className="media-event-description">
                                Body Control Module PCB - MAC Formula Electric
                            </p>
                        </div>
                    </div>
                    <div className="media-event">
                        <div className="media-event-image-1">

                        </div>
                        <div className="media-event-date">
                            <h1 className="media-event-date-header">November 28, 2016</h1>
                        </div>
                        <div className="media-event-description-container">
                            <p className="media-event-description">
                                    MAC Formula Electric – Turning Designs into Reality
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Media
