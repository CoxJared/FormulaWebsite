import React, { Component } from 'react';
import SaeNight from '../event/SaeNight';
import FormulaNorth from '../event/FormulaNorth';
import './EventExplorer.css';

export class EventExplorer extends Component {
    render() {
        return (
            <div className="container">
                <SaeNight />
                <FormulaNorth />
            </div>
        )
    }
}

export default EventExplorer
