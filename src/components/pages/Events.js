import React, { Component } from 'react';
import Header from '../layout/header/Header';
import EventExplorer from '../layout/eventexplorer/EventExplorer';

export class Events extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
      
    render() {
        return (
            <div>
                <Header />
                <EventExplorer />
            </div>
        )
    }
}

export default Events
