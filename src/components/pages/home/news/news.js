import React, { Component } from 'react';
import './news.css';

export class news extends Component {
    render() {
        return (
            <div className="news-container">
                <div className="news-title-container">
                    <h1 className="news-title">News</h1>
                </div>
                <div className="news-events">
                    <div className="news-event">
                        <div className="news-event-image">

                        </div>
                        <div className="news-event-date">
                            <h1 className="news-event-date-header">July 1st</h1>
                        </div>
                        <div className="news-event-description-container">
                            <p className="news-event-description">
                                2019 SAE STUDENT’S NIGHT
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default news
