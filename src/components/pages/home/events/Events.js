import React, { Component } from 'react';
import './Events.css';

export class Events extends Component {
    render() {
        return (
            <div className="width-restricter">
            <div className="events-container">
                <div className="events-title-container">
                <div className="line-break-events"></div>
                    <h1 className="events-title"> Events</h1>
                </div>

                <div className="events-events">
                    <a className="events-event" href="http://saecentralontario.org/events/" target="_blank" rel="noopener noreferrer">
                        <div className="events-event-image-1">
                        <h1 className="hidden-view-article-header">Learn More</h1>
                        </div>
                        <div className="events-event-date">
                            <h1 className="events-event-date-header">June 1, 2019</h1>
                        </div>
                        <div className="events-event-description-container">
                            <p className="events-event-description">
                                2019 SAE Student's night
                            </p>
                        </div>
                    </a>

                    <a className="events-event" href="https://www.sae.org/attend/student-events/formula-sae-north" target="_blank" rel="noopener noreferrer">
                        <div className="events-event-image-2">
                        <h1 className="hidden-view-article-header">Learn More</h1>
                        </div>
                        <div className="events-event-date">
                            <h1 className="events-event-date-header">March 4, 2019</h1>
                        </div>
                        <div className="events-event-description-container">
                            <p className="events-event-description">
                                FSAE - Formula North
                            </p>
                        </div>
                    </a>
                </div>
            </div>
            </div>
        )
    }
}

export default Events
