
import React, { Component } from 'react';
import './Upcoming.scss';

export class UpcomingEvents extends Component {
    render() {
        return (
            <div className="upcome-event-container">
                <h1 className="upcoming-event-header">Upcoming Events</h1>
                <div className="events-container">
                </div>
            </div>
        )
    }
}

export default UpcomingEvents
