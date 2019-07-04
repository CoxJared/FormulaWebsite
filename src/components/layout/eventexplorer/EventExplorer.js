import React, { Component } from 'react';
import Event from '../event/Event';
import './EventExplorer.css';

export class EventExplorer extends Component {
    render() {
        return (
            <div className="container">
                <Event />
            </div>
        )
    }
}

export default EventExplorer
