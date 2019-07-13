import React, { Component } from 'react';
import './ExtraSection.scss'
import Media from './../media/Media';
import UpcomingEvents from './../upcomingevents/UpcomingEvents';

export class ExtraSection extends Component {
    render() {
        return (
            <div className="extra-section">
                <div className="media-section">
                    <Media />
                </div>
                <div className="upcomging-events-section">
                    <UpcomingEvents />
                </div>
            </div>
        )
    }
}

export default ExtraSection
