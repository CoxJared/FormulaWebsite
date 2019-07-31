import React from 'react';
import './news.css';

export function news () {
    return (
        <div className="socialmedia-container">
            <div className="socialmedia-title-container">
                <h1 className="socialmedia-title">News</h1>
            </div>
            <div className="socialmedia-events">
                <div className="socialmedia-event">
                    <div className="socialmedia-event-image-1">

                    </div>
                    <div className="socialmedia-event-date">
                        <h1 className="socialmedia-event-date-header">July 1st</h1>
                    </div>
                    <div className="socialmedia-event-description-container">
                        <p className="socialmedia-event-description">
                            2019 SAE STUDENT’S NIGHT
                        </p>
                    </div>
                </div>
                <div className="socialmedia-event">
                    <div className="socialmedia-event-image-2">

                    </div>
                    <div className="socialmedia-event-date">
                        <h1 className="socialmedia-event-date-header">May 31</h1>
                    </div>
                    <div className="socialmedia-event-description-container">
                        <p className="socialmedia-event-description">
                            FSAE - Formula North
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default news
