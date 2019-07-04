import React, { Component } from 'react'
import './Event.css';

export class Event extends Component {
    render() {
        return (
            <div className="event-container">
                <div className="date-box">
                    <h1>July 1</h1>
                </div>
                <div className="info-box"> 
                    <h2>SAE Night</h2>
                    <p>
                        Student SAE teams will showcase their SAE competition vehicles and their technical achievements to a panel of industry professionals in an effort to win cash awards from SAE Central Ontario Section.
                    </p>
                </div>
            </div>
        )
    }
}

export default Event
