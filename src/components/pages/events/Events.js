import React, { Component } from 'react';
import Header from '../../layout/header/Header';
import EventExplorer from './eventexplorer/EventExplorer';
import Footer from './../../layout/footer/Footer';

export class Events extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
      
    render() {
        return (
            <div>
                <Header /> 
                <EventExplorer />
                <Footer />
            </div>
        )
    }
}

export default Events
