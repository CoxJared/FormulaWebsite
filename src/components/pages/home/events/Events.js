import React, { Component } from 'react';
import './Events.css';

export class Events extends Component {
    render() {
        return (
            <div className="width-restricter">
            <div className="events-container">
                <div className="events-title-container">
                    <h1 className="events-title">Events</h1>
                </div>

                <div className="events-events">
                    <div className="events-event">
                        <div className="events-event-image-1">

                        </div>
                        <div className="events-event-date">
                            <h1 className="events-event-date-header">June 1, 2019</h1>
                        </div>
                        <div className="events-event-description-container">
                            <p className="events-event-description">
                                2019 SAE Student's night
                            </p>
                        </div>
                    </div>

                    <div className="events-event">
                        <div className="events-event-image-2">

                        </div>
                        <div className="events-event-date">
                            <h1 className="events-event-date-header">March 4, 2019</h1>
                        </div>
                        <div className="events-event-description-container">
                            <p className="events-event-description">
                                FSAE - Formula North
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Events
